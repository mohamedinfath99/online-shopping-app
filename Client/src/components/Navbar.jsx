import styled from 'styled-components';
import { Search, ShoppingCart } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import { grey } from '@material-ui/core/colors';
import {mobile}  from '../Responsive'


const Contanier = styled.div`
  height: 60px;
  background-color: whitesmoke;
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

  ${mobile({display: "none"})}
`


const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  border: 0.5px solid lightgray;
  padding: 5px;


  ${mobile({marginLeft: "0", marginRight : "5px"})}
`


const Input = styled.input`
  border: none;
  background-color: whitesmoke;
  outline: none;


  ${mobile({width : "50px"})}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.div`
  font-size: 26px;
  font-weight: bold;


  ${mobile({fontSize: "24px"})}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;


  ${mobile({flex: 2, justifyContent: "center"})}
`

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  color: #3d3a3a;


  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`




const Navbar = () => {
  return (
    <Contanier>
      <Warapper>

        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ fontSize: "18px", color: grey }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>TRRIPY.</Logo>
        </Center>

        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>sign in</MenuItem>
          <MenuItem>
            <Badge overlap="rectangular" badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </MenuItem>
        </Right>


      </Warapper>
    </Contanier>
  )
}

export default Navbar
