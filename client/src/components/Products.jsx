import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { publicRequest } from '../requestMethods';
import ProductCard from './ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addProducts, initSearch } from '../redux/searchRedux';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* background-color: #f3f9fc; */
`;

const InnerContainer =styled.div`
  /* margin: 20px; */
  background-color: rgba(0,0,0,.04);
  /* background-color: #ffffff; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  /* margin: 20px; */
  /* border-radius: 50px; */
`

const Products = () => {

  const filters = useSelector((state) => state.searchProducts.filters);
  const sort = useSelector(state => state.searchProducts.sort);
  const searchInputValue = useSelector(state => state.searchProducts.searchInputValue);
  const [products, setProducts] = useState(useSelector((state) => state.searchProducts.products));
  const [showProducts, setShowProducts] = useState([]);
  const location = useLocation();
  const myLocation = location.pathname.split("/");
  const cat = myLocation[2];
  const dispatch = useDispatch();
  const defaultsFilters = new Set(['color','size']);


  useEffect(() => {
    console.log("getProducts");
    const getProducts = async () => {
      try{
        if(cat || !myLocation[1]){
          console.log("getProducts1");
          let res = await publicRequest.get(
            cat ? `/products?category=${cat}` : `/products`);
          dispatch(initSearch(""));
          dispatch(addProducts(res.data));
          setProducts(res.data);
          setShowProducts(res.data);
        } else{
          console.log("getProducts2");
          const res =  searchInputValue 
            ? await publicRequest.get(`/products/search/${searchInputValue}`)
            : await publicRequest.get(`/products`)
          dispatch(addProducts(res.data));
          setProducts(res.data);
          setShowProducts(res.data);
        }
      }catch(err){};
    };
    getProducts();
  }, [cat,searchInputValue]);

  useEffect(() => {
    console.log("filters");
    filters && products.length > 0 &&
    setShowProducts(
      products.filter((item) => 
        Object.entries(filters).every(([key,value]) => 
          (item[key].includes(value) || defaultsFilters.has(value))
        )
      )
    );
  }, [filters,sort]);

  useEffect(() => {
    console.log("sort");
    if(sort === "newest"){
      console.log("newest");
      setShowProducts((prev) => 
        [...prev].sort((a,b) => -1*(new Date(a.createdAt) - new Date(b.createdAt)))
      );
    }
    else if (sort === "asc"){
      setShowProducts((prev) => 
        [...prev].sort((a,b) => a.price - b.price)
      );
    }
    else {
      setShowProducts((prev) => 
      [...prev].sort((a,b) => b.price - a.price)
      );
    }
  }, [sort,filters]);

  return (
    <Container>
      <InnerContainer>
        {
           myLocation[1]
           ? showProducts?.map(item => (<ProductCard item={item} key={item._id} />))
           : showProducts?.slice(0,4).map(item => (<ProductCard item={item} key={item._id} />))
        }
      </InnerContainer>
    </Container>
  );
};

export default Products;
