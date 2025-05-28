import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/api';
import { ProductDetailsContainer, ProductImage, ProductInfo, ProductTitle, ProductPrice, ProductDescription, AddToCartButton } from './styles';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <ProductDetailsContainer>Carregando...</ProductDetailsContainer>;
  if (!product) return <ProductDetailsContainer>Produto não encontrado.</ProductDetailsContainer>;

  return (
    <ProductDetailsContainer>
      <ProductImage src={product.imagem || product.image} alt={product.nome || product.title} />
      <ProductInfo>
        <ProductTitle>{product.nome || product.title}</ProductTitle>
        <ProductPrice>R$ {product.preco ? product.preco.toFixed(2) : product.price?.toFixed(2)}</ProductPrice>
        <ProductDescription>{product.descricao || product.description}</ProductDescription>
        <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
      </ProductInfo>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
