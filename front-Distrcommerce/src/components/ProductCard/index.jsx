import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContainer, ProductImage, ProductInfo, ProductTitle, ProductPrice, ProductRating } from './styles';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/product/${product.id}`)}>
      <ProductImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtdXlvvIYV1aZFn7y-9czmY97FRwsZ1UaQw&s" alt={product.nome || product.title} />
      <ProductInfo>
        <ProductTitle>{product.nome} - {product.descricao}</ProductTitle>
        <ProductPrice>R$ {(product.preco !== undefined ? product.preco : product.price)?.toFixed(2)}</ProductPrice>
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
