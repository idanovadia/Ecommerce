import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const ProductsCards = () => {

    return (
        <div>
            <Navbar/>
            <Announcement/>
            <Cards>
                <ProductCard img={"https://assets.ajio.com/medias/sys_master/root/20210403/TCIf/6068daf77cdb8c1f147d2662/-473Wx593H-461866963-blue-MODEL.jpg"} title={"Strips shirt"} price ={99}/>
                <ProductCard img={"https://assets.ajio.com/medias/sys_master/root/20210403/TCIf/6068daf77cdb8c1f147d2662/-473Wx593H-461866963-blue-MODEL.jpg"} title={"Strips shirt"} price ={99}/>
                <ProductCard img={"https://assets.ajio.com/medias/sys_master/root/20210403/TCIf/6068daf77cdb8c1f147d2662/-473Wx593H-461866963-blue-MODEL.jpg"} title={"Strips shirt"} price ={99}/>
                <ProductCard img={"https://assets.ajio.com/medias/sys_master/root/20210403/TCIf/6068daf77cdb8c1f147d2662/-473Wx593H-461866963-blue-MODEL.jpg"} title={"Strips shirt"} price ={99}/>
                <ProductCard img={"https://assets.ajio.com/medias/sys_master/root/20210403/TCIf/6068daf77cdb8c1f147d2662/-473Wx593H-461866963-blue-MODEL.jpg"} title={"Strips shirt"} price ={99}/>
            </Cards>
            <Footer/>
        </div>
    )
}

export default ProductsCards
