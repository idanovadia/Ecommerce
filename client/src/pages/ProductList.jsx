import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import {mobile} from "../responsive";
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchProducts/SearchBar';
import SearchCategory from '../components/SearchProducts/SearchFilters';
  

const Container = styled.div`

`;


const Title = styled.h1`
    margin: 20px;
`;



const ProductList = () => {

    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    // const [filters, setFilter] = useState({});
    // const [sort, setSort] = useState("newest");
    
    
    return (
        <Container>
            <Navbar></Navbar>
            <Announcement></Announcement>
            {!cat && <SearchBar/>}
            {cat && <Title>{cat}</Title>}
            <SearchCategory/>
            <Products />
            <NewsLetter/>
            <Footer/>
        </Container>
    );
};

export default ProductList;
