import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../../services/api";
import {
  ProductDetailsContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  AddToCartButton,
} from "./styles";
import BackButton from "../../components/BackButton";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    // Recupera o carrinho do localStorage ou inicia como array vazio
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Verifica se o produto já está no carrinho
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity = existing.quantity ? existing.quantity + 1 : 2;
    } else {
      cart.push({
        id: product.id,
        nome: product.nome || product.title,
        preco: product.preco || product.price,
        quantity: 1,
        imagem:
          product.imagem ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtdXlvvIYV1aZFn7y-9czmY97FRwsZ1UaQw&s",
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produto adicionado ao carrinho!");
  };

  if (loading)
    return <ProductDetailsContainer>Carregando...</ProductDetailsContainer>;
  if (!product)
    return (
      <ProductDetailsContainer>Produto não encontrado.</ProductDetailsContainer>
    );

  return (
    <>
      <BackButton
        onClick={() => navigate("/")}
        style={{ marginBottom: 10, marginTop: 10 }}
      >
        Voltar
      </BackButton>
      <ProductDetailsContainer>
        <ProductImage
          src={
            product.imagem ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtdXlvvIYV1aZFn7y-9czmY97FRwsZ1UaQw&s"
          }
          alt={product.nome || product.title}
        />
        <ProductInfo>
          <ProductTitle>{product.nome || product.title}</ProductTitle>
          <ProductPrice>
            R${" "}
            {(product.preco || product.price)?.toFixed(2)}
          </ProductPrice>
          <ProductDescription>
            {product.descricao || product.description}
          </ProductDescription>
          <AddToCartButton onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </AddToCartButton>
        </ProductInfo>
      </ProductDetailsContainer>
    </>
  );
};

export default ProductDetails;
