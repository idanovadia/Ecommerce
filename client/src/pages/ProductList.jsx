import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import {mobile} from "../responsive";
import { useSelector } from 'react-redux';
import InnerProductList from '../components/InnerProductList';
import Massage from "../components/Massage"
  

const Container = styled.div`

`;

const ProductList = () => {

    const lenOfProducts = useSelector((state) => state.searchProducts.products.length);

    return (
        <Container>
            <Navbar></Navbar>
            <Announcement></Announcement>
            {lenOfProducts > 0 
                ?   <InnerProductList/>
                :   <Massage
                        massage={"No Product had found"}
                        innerMassage={`Unfortunately, we cant find anything that match your search`}
                    />}
            <NewsLetter/>
            <Footer/>
        </Container>
    );
};

export default ProductList;
