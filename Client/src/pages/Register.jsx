import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 2555, 225, 0.5), rgba(255, 2555, 225, 0.5)), url("https://img.freepik.com/premium-vector/clothes-items-white-background-seamless-pattern-thin-line_48369-13298.jpg?w=360") center;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Warapper = styled.div`
    width: 40%;
    padding: 25px;

    background-color: whitesmoke;
    opacity: 0.8;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Warapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="first name" />
            <Input placeholder="last name" />
            <Input placeholder="user name" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>By creating an account,I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
            <Button>CREATE ACCOUNT</Button>
        </Form>
      </Warapper>
    </Container>
  )
}

export default Register
