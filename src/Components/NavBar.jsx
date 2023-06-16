import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';


const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid orange;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid orange;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const MenuItem = styled.div`
  font-size = 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export default function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <SearchIcon/>
          </SearchContainer>
        </Left>
        <Center><Logo>
          <Link to = "/">Sample Ecommerce Wesbsite</Link>
          </Logo></Center>
        <Right>
          <MenuItem><Link to = "/Register">Register</Link></MenuItem>
          <MenuItem><Link to = "/Login">Login</Link></MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
            <Link to = "/Cart"><ShoppingCartOutlinedIcon/></Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
      </Container>
  )
}
