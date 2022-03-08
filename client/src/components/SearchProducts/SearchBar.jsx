import { Input } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addProducts, initSearch } from "../../redux/searchRedux";
import { publicRequest } from '../../requestMethods';

const SearchContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState(useSelector
        ((state) => state.searchProducts.searchInputValue)
    );

    const dispatch = useDispatch();
    const search = () => {
        dispatch(initSearch(searchValue));
        //getProduct();
    }

    const getProduct = async () => {
        try{
            const res = await publicRequest.get(`/products/search/${searchValue}`);
            dispatch(addProducts(res.data));
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <SearchContainer>
                <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} style={{width:"30%"}} placeholder='Search'/>
                <Link to="/products">
                    <Search style={{color:"red", fontSize:25}} onClick={search}/>
                </Link>
            </SearchContainer>
        </div>
    )
}

export default SearchBar
