import { Badge, IconButton } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { AccountCircle, ExitToApp, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, logoutFailure } from '../redux/userRedux';

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
    const dispatch = useDispatch();
    const quantity = useSelector((state) => state.cart.quantity);
    const currentUser = useSelector((state) => state.user.currentUser);

    const logOut = (e) => {
        try{
            dispatch(logout());
        }catch(err){
            dispatch(logoutFailure());
        }    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                </Left>
                <Center>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <Logo style={{ fontSize: 60 }}>
                            E-Com
                        </Logo>
                    </Link>
                </Center>
                <Right>
                    {
                        currentUser && 
                        <>
                            <Link to="/user" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                <AccountCircle style={{ fontSize: 34 }}/>
                            </Link>
                            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <IconButton  onClick={logOut}>
                                <ExitToApp style={{ fontSize: 34 }}/>
                            </IconButton>
                            </Link>
                        </>
                    }
                    {
                    !currentUser &&
                        <>
                            <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                <MenuItem >Register</MenuItem>
                            </Link>
                            <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                <MenuItem >Sign In</MenuItem>
                            </Link>
                        </>
                    }
                    <Link to="/cart" style={{ color: 'inherit', textDecoration: 'inherit'}}>
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
