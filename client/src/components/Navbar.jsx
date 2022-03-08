import { Badge } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { AccountCircle, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 100px;
    ${mobile({height: "60px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px" })}
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 10px;
    height: 40px;
`;
const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({fontSize: "24px"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2 , justifyContent: "center"})}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`;

const Navbar = () => {

    const quantity = useSelector((state) => state.cart.quantity);
    const currentUser = useSelector((state) => state.user.currentUser);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                </Left>
                <Center>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Logo>
                            E-Com
                        </Logo>
                    </Link>
                </Center>
                <Right>
                    {
                        currentUser && <AccountCircle style={{ fontSize: 40 }}/>
                    }
                    {
                    !currentUser &&
                        <>
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                                <MenuItem>Register</MenuItem>
                            </Link>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <MenuItem>Sign In</MenuItem>
                            </Link>
                        </>
                    }
                    <Link to="/cart" >
                        <MenuItem>
                            <Badge badgeContent={quantity} color='primary'>
                                <ShoppingCartOutlined style={{ fontSize: 34 }}/>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
