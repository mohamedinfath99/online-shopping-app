import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from "../components/Footer"
import { Add, Remove } from '@material-ui/icons';
import {mobile} from '../Responsive'


const Contanier = styled.div`
    
`

const Warapper = styled.div`
    padding: 20px;


    ${mobile({padding: "10px"})}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;

    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`


    ${mobile({display: "none"})}
    
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottem = styled.div`
    display: flex;
    justify-content: space-between;


    ${mobile({flexDirection: "column"})}
`

const Info = styled.div`
    flex: 3;


    ${mobile({flexDirection: "column"})}
`


const Product = styled.div`
    display: flex;
    justify-content: space-between;
    

    ${mobile({flexDirection: "column"})}
`


const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`


const Image = styled.img`
    width: 200px;


    ${mobile({width: "180px"})}

`


const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`


const ProductName = styled.span`
    
`

const ProductID = styled.span`
    
`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};

`

const PriceSize = styled.span`
    
`


const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

const PrductAmount = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 10%;
    border: 1px solid grey;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0px 20px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 20px;

    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

    font-weight: ${props => props.type === "total" && "700"};
    font-weight: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`

    
`

const SummaryItemPrice = styled.span`
    
`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`


const Cart = () => {
    return (
        <Contanier>
            <Navbar />
            <Announcement />

            <Warapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>

                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>

                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>



                <Bottem>

                    <Info>

                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details>
                                    <ProductName><b>Product :</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductID><b>ID :</b> 46465456456</ProductID>
                                    <ProductColor color="black" />
                                    <PriceSize><b>Size :</b> M</PriceSize>
                                </Details>
                            </ProductDetail>

                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add style={{ cursor: "pointer" }} />
                                    <PrductAmount>2</PrductAmount>
                                    <Remove style={{ cursor: "pointer" }} />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetails>
                        </Product>

                        <Hr />

                        <Product>
                            <ProductDetail>
                                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                                <Details>
                                    <ProductName><b>Product :</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductID><b>ID :</b> 46465456456</ProductID>
                                    <ProductColor color="black" />
                                    <PriceSize><b>Size :</b> M</PriceSize>
                                </Details>
                            </ProductDetail>

                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add style={{ cursor: "pointer" }} />
                                    <PrductAmount>2</PrductAmount>
                                    <Remove style={{ cursor: "pointer" }} />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetails>
                        </Product>

                    </Info>

                    <Summary>

                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 100</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -10</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 180</SummaryItemPrice>
                        </SummaryItem>

                        <Button>CHECKOUT NOW</Button>
                    </Summary>

                </Bottem>
            </Warapper>

            <Footer />
        </Contanier>
    )
}


export default Cart
