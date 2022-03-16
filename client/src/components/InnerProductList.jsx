import styled from "styled-components";
import SearchBar from '../components/SearchProducts/SearchBar';
import SearchCategory from '../components/SearchProducts/SearchFilters';
import Products from '../components/Products';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFillters } from '../redux/searchRedux';
import React, { useEffect } from 'react';

const Title = styled.h1`
margin: 20px;
`;

const InnerProductList = () => {

    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const dispatch = useDispatch();
    useEffect( () => () => dispatch(addFillters({})), [] );

    return (
        <>
            {!cat && <SearchBar/>}
            {cat && <Title>{cat}</Title>}
            <SearchCategory/>
            <Products />
        </>
    )
}

export default InnerProductList
