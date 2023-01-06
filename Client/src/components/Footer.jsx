import React from 'react'
import styled from 'styled-components';
import { Facebook, Instagram, Twitter, LinkedIn, LocationOn, Phone, Email } from '@material-ui/icons';
import {mobile } from "../Responsive"

const Container = styled.div`
    display: flex;


    ${mobile({flexDirection: "column"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    font-weight: bold;
`


const LeftDesc = styled.p`
    margin: 20px 0px;
`


const LeftIconContainer = styled.div`
    display: flex;
    gap: 10px;


    ${mobile({justifyContent: "center"})}
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;


    
`


const Center = styled.div`
    flex: 1;
    padding: 20px;


    ${mobile({display : "none"})}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;

    list-style: none;

    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

    cursor: pointer;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;


    ${mobile({backgroundColor: "lightgray"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`


const Footer = () => {
    return (
        <Container>

            <Left>
                <Logo>TRIPPY.</Logo>

                <LeftDesc>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue </LeftDesc>

                <LeftIconContainer>

                    <SocialIcon color="385999">
                        <Facebook />
                    </SocialIcon>

                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>

                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>

                    <SocialIcon color="385999">
                        <LinkedIn />
                    </SocialIcon>

                </LeftIconContainer>

            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Pages</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem><LocationOn style={{marginRight : "10px"}}/>Main Street Colombo, Sri Lanka.</ContactItem>
                <ContactItem><Phone style={{marginRight : "10px"}} />0778696336</ContactItem>
                <ContactItem><Email style={{marginRight : "10px"}} />trippy@gmail.com</ContactItem>
            </Right>

        </Container>
    )
}

export default Footer
