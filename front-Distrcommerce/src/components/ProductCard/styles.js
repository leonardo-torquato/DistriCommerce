import styled from 'styled-components';

export const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #B12704;
  margin: 0;
`;

export const ProductRating = styled.div`
  color: #FFA41C;
  font-size: 1.2rem;
`;
