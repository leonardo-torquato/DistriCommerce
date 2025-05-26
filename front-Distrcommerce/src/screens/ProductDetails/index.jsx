import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetailsContainer, ProductImage, ProductInfo, ProductTitle, ProductPrice, ProductDescription, AddToCartButton } from './styles';

const ProductDetails = () => {
  const { id } = useParams();
  // Aqui você vai buscar os detalhes do produto usando o id
  // Por enquanto vamos usar dados mockados
  const product = {
    id: id,
    title: "Iphone 12 Pro Max",
    price: 5000,
    description: "Uma descrição detalhada do produto aqui...",
    image: "https://imgs.casasbahia.com.br/55029405/1g.jpg?imwidth=500",
    rating: 4.5
  };

  return (
    <ProductDetailsContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
      </ProductInfo>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
