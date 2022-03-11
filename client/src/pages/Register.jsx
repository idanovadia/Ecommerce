import styled from 'styled-components';
import {mobile} from "../responsive"
import { React, useState } from 'react';
import { publicRequest, userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput/FormInput';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
        /* linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5),
        ),   */
        url("https://i.pinimg.com/originals/1e/97/7c/1e977c49746e0998686213a027f03600.jpg") center;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: circle(80% at 70% 30%);
`;

const Wrapper = styled.div`
     width: 70%;
     padding: 20px;
     background-color: white;
     ${mobile({width: "75%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.p`
    flex: 1;
    width: 70%;
    height: 20px;
    font-size: 14px;
    margin: 20px 0px;
`;

const LowerForm = styled.div`
    width: 100;
`

const ButtonWrapper = styled.div`
      
`

const Button = styled.button`
    flex: 1;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    const inputs = [
        {
          id: 1,
          name: "firstName",
          type: "text",
          placeholder: "First Name",
          errorMessage:
            "First Name have to include only Letters",
          label: "First Name",
          pattern: "^[A-Za-z]{1,30}$",
          required: true,
        },
        {
          id: 2,
          name: "lastName",
          type: "text",
          placeholder: "Last Name",
          errorMessage:
            "Last Name have to include only Letters",
          label: "Last Name",
          pattern: "^[A-Za-z]{1,30}$",
          required: true,
        },
        {
          id: 3,
          name: "username",
          type: "text",
          placeholder: "Username",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 4,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          pattern: `^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$`,
          required: true,
        },
        {
          id: 5,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
          id: 6,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values.password,
          required: true,
        },
        {
          id: 7,
          name: "city",
          type: "text",
          placeholder: "City",
          errorMessage:
            "City have to include only Letters",
          label: "City",
          required: true,
        },
        {
          id: 8,
          name: "street",
          type: "text",
          placeholder: "Street",
          errorMessage:
            "",
          label: "Street",
          required: true,
        },
      ];

    const navigate = useNavigate();

    const createUser = async () => {
        try{
            const res = await publicRequest.post("/auth/register",{
                values
            });
            navigate('/');
        }catch(err){
          console.log(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser();
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <LowerForm>
                        <Agreement>
                            By creating an account, I consent to the processing of my personal data in according with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button>Create</Button>
                    </LowerForm>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;