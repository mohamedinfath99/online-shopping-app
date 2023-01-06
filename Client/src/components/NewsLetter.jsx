import React from 'react';
import { Send } from '@material-ui/icons';
import styled from 'styled-components';


const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 70px;
    font-weight: bold;
    margin: 20px;
`

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;


`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: wheat;

    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`

const Input = styled.input`
    border: none;
    flex: 8;

    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

const NewsLetter = () => {
    return (
        <Container>
            <Title>NEWS LETTER</Title>
            <Desc>Get timely updates from your favorite products.</Desc>

            <InputContainer>
                <Input placeholder='Your email'/>
                <Button>
                    <Send />
                </Button>
            </InputContainer>

        </Container>
    )
}

export default NewsLetter
