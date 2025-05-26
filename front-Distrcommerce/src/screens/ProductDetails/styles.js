import styled from 'styled-components';

export const ProductDetailsContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProductTitle = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin: 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #B12704;
  margin: 0;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

export const AddToCartButton = styled.button`
  background: #FFD814;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #F7CA00;
  }
`;
