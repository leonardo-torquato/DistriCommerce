import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 2rem;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;
