import React from 'react';
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter';
import Footer from "../components/Footer";
import {mobile} from '../Responsive'


const Container = styled.div`
    
`


const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;

    ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;


    ${mobile({marginRight: "0px"})}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;


    ${mobile({margin: "10px 0px"})}
`

const Option = styled.option`
    
`

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />

        <Title>Dresses</Title>

        <FilterContainer>
            <Filter>
                <FilterText>Filter products: </FilterText>
                <Select>
                    <Option disabled selected>Colour</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>

                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>

            <Filter>
                <FilterText>Sort products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>


        <Products/>
        <NewsLetter/>
        <Footer />
      
    </Container>
  )
}

export default ProductList
