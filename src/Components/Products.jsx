import styled from 'styled-components';
import { FrontPageItems } from '../ProductImages';
import Product from './Product';

const Container = styled.div `
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;
`;
export default function Products() {
  return (
    <Container>
      {FrontPageItems.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}
