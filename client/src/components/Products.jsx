import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios';
import { publicRequest } from '../requestMethods';
import ProductCard from './ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addFillters, addProducts, initSearch } from '../redux/searchRedux';

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
  margin: 20px;
  border-radius: 50px;
`

const Products = () => {

  const filters = useSelector((state) => state.searchProducts.filters);
  const sort = useSelector(state => state.searchProducts.sort);
  const searchInputValue = useSelector(state => state.searchProducts.searchInputValue);
  const [products, setProducts] = useState(useSelector((state) => state.searchProducts.products));
  const location = useLocation();
  const myLocation = location.pathname.split("/");
  const cat = myLocation[2];
  const dispatch = useDispatch();


  useEffect(() => {
    const getProducts = async () => {
      console.log(searchInputValue);
      try{
        if(cat || !myLocation[1]){
          let res = await publicRequest.get(
            cat ? `/products?category=${cat}` : `/products`);
          dispatch(initSearch(""));
          dispatch(addProducts(res.data));
          setProducts(res.data);
        } else if(searchInputValue){
          const res = await publicRequest.get(`/products/search/${searchInputValue}`);
          dispatch(addProducts(res.data));
          setProducts(res.data);
        }
      }catch(err){};
    };
    getProducts();
  }, [cat,searchInputValue]);

  useEffect(() => {
    filters && products.length > 0 && cat && 
      setProducts(
        products.filter((item) => 
          Object.entries(filters).every(([key,value]) => 
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters]);

  useEffect(() => {
    if(sort === "newest"){
      setProducts((prev) => 
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      );
    }
    else if (sort === "asc"){
      setProducts((prev) => 
        [...prev].sort((a,b) => a.price - b.price)
      );
    }
    else {
      setProducts((prev) => 
      [...prev].sort((a,b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      <InnerContainer>
        {
           myLocation[1]
           ? products.map(item => (<ProductCard item={item} key={item._id} />))
           : products.slice(0,3).map(item => (<ProductCard item={item} key={item._id} />))
        }
      </InnerContainer>
    </Container>
  );
};

export default Products;
