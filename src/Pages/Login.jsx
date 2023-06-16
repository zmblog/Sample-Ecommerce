import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    );
    
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 10px 10px;
  padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 20px 10px;
  background-color: Orange;
  color: white;
  cursor: pointer;
  margin: 20px 10px 10px 10px;
`;

export default function Login() {
    return (
        <Container>
          <Wrapper>
            <Title>Login</Title>
            <Form>
              
              <Input placeholder="username" />
              
              <Input placeholder="password" />
              
              
              <Button>CREATE</Button>
            </Form>
          </Wrapper>
        </Container>
      )
}
