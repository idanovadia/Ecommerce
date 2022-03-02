import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styled from 'styled-components';
import { CheckCircle } from "@material-ui/icons";

const Container = styled.div`
    height: 37vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fcf6f6;
`;

const Title = styled.h1`
    font-size: 46px;
    margin: 20px 0px;
`;

const Massage = styled.p`
    width: 30%;
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
`;

const Succuss = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Container>
                <Title>Order Submitted</Title>
                <Massage>Thank you for your order, It submitted successfully</Massage>
                <CheckCircle style={{fontSize:"50px" , color: "green"}}/>
            </Container>
            <Footer/>
        </div>
    )
}

export default Succuss
