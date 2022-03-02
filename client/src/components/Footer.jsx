import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    /* flex-direction: column; */
    padding: 20px;
    ${mobile({FlexDirection: "column"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color:  #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "fff8f8"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>E-Com</Logo>
            <Desc>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quibusdam maiores ipsum voluptatem eaque cupiditate rerum error sed quidem! Tempore ducimus sed nostrum
                officia in pariatur adipisci aut, consequatur veritatis dolorem.
            </Desc>
            <SocialContainer>
                <SocialIcon color = "3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color = "E4405F">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color = "DEB887">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color = "E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful List</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contacts</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> Shadow Street, Antarctica
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +972 1234567
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> contact@E-com.io
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  );
};

export default Footer;
