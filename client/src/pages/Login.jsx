import React, { useState } from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
import { addShipmentAddress } from '../redux/cartRedux';

const MainImage = styled.div`
    /* width: 100vw;
    height: 100vh; */
    width: 100%;
    height: 100%;
    flex: 3;
    background: 
        /* linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5),
        ),   */
        url("https://www.supdeluxe.com/sites/default/files/mba_fashion.jpg") top right;
    background-size: cover;
    clip-path: circle(80% at 80% 50%);

`

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    /* background: 
        url("https://www.supdeluxe.com/sites/default/files/mba_fashion.jpg") top right;
    background-size: cover; */
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    flex: 1;
     width: 27%;
     padding: 20px;
     background-color: white;
     opacity: 0.9;
     ${mobile({width: "75%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color:green;
        cursor: not-allowed;
    }
`;

const Error = styled.span`
    color: red;
`

const Link = styled.a`
    margin: 5px 0px;
    font-style: 20px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password});
        
    }
    
    return (
        <Container>     
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input
                        placeholder="username" 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        placeholder="password" 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Link>DO NOT YOU REMEMBER YOUR PASSWORD</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
            <MainImage/>
        </Container>
    );
};

export default Login;
