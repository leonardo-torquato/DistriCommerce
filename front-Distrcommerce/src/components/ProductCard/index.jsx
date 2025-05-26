import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContainer, ProductImage, ProductInfo, ProductTitle, ProductPrice, ProductRating } from './styles';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/product/${product.id}`)}>
      <ProductImage src={product.image} alt={product.title} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
        <ProductRating>
          {Array(5)
            .fill()
            .map((_, i) => (
              <span key={i}>★</span>
            ))}
        </ProductRating>
      </ProductInfo>
    </CardContainer>
  );
};

export default ProductCard;
