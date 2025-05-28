import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../../services/api';
import { ProductDetailsContainer, ProductImage, ProductInfo, ProductTitle, ProductPrice, ProductDescription, AddToCartButton } from './styles';
import BackButton from '../../components/BackButton';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
      <BackButton onClick={() => navigate('/')} style={{ marginBottom: 20 }}>Voltar</BackButton>
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
