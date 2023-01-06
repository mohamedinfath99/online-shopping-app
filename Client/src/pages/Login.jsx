import React from 'react';
import styled from 'styled-components';
import {mobile} from '../Responsive'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 2555, 225, 0.5), rgba(255, 2555, 225, 0.5)), url("https://img.freepik.com/premium-vector/clothes-items-white-background-seamless-pattern-thin-line_48369-13298.jpg?w=360") center;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const Warapper = styled.div`
    width: 25%;
    padding: 25px;

    background-color: whitesmoke;
    opacity: 0.8;


    ${mobile({width: "70%"})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px ;
    padding: 10px;
`


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Warapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="user name" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Warapper>
      
    </Container>
  )
}

export default Login
