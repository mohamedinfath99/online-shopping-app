import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCart } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import { grey } from '@material-ui/core/colors';


const Contanier = styled.div`
  height: 60px;
  background-color: white;
`


const Warapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`


const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`


const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`


const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  border: 0.5px solid lightgray;
  padding: 5px;
`


const Input = styled.input`
  border: none;
  background-color: white;
  outline: none;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.div`
  font-size: 26px;
  font-weight: bold;

`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  color: #3d3a3a;
`




const Navbar = () => {
  return (
    <Contanier>
      <Warapper>

        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ fontSize: "18px", color: grey}} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>TRRIPY.</Logo>
        </Center>

        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </MenuItem>
        </Right>


      </Warapper>
    </Contanier>
  )
}

export default Navbar
