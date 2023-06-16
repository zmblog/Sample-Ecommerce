import React from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 100px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.div`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Description = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px #FF5733;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px #FF5733 ;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: orange;
  }
`;
export default function Product1() {
    return (
      <Container>
        <NavBar/>
        <Wrapper>
            <ImgContainer>
                <Image src = "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>
                    Random Item
                </Title>
                <Description>
                Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors. This basketball icon channels '80s vibes with premium leather in the upper that looks good and breaks in even better. Modern footwear technology helps bring the comfort into the 21st century.


                </Description>
                <Price>
                    10$
                </Price>
                <AddContainer>
                    <AmountContainer>
                        <RemoveOutlinedIcon />
                        <Amount>1</Amount>
                        <AddOutlinedIcon />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
      </Container>
    )
  }
  