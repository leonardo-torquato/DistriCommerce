import React, { useState, useEffect } from 'react';
import { CartContainer, CartItem, ItemInfo, ItemActions, RemoveButton, TotalBox, CheckoutButton, EmptyCart } from './styles';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';

const Cart = () => {
  const navigate = useNavigate();
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setItens(storedCart);
  }, []);

  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const alterarQuantidade = (id, delta) => {
    const updatedItens = itens.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setItens(updatedItens);
    updateLocalStorage(updatedItens);
  };

  const removerItem = (id) => {
    const updatedItens = itens.filter(item => item.id !== id);
    setItens(updatedItens);
    updateLocalStorage(updatedItens);
  };

  const total = itens.reduce((acc, item) => acc + item.preco * item.quantity, 0);

  const handleCheckout = () => {
    // Navega para a página de checkout passando os dados do carrinho via state
    navigate('/checkout', { state: { cart: itens } });
  };

  if (itens.length === 0) {
    return (
      <CartContainer>
        <EmptyCart>Seu carrinho está vazio.</EmptyCart>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <BackButton onClick={() => navigate(-1)} style={{ marginBottom: 20 }}>Voltar</BackButton>
      <h1>Meu Carrinho</h1>
      {itens.map(item => (
        <CartItem key={item.id}>
          <img src={item.imagem} alt={item.nome} />
          <ItemInfo>
            <strong>{item.nome}</strong>
            <span>Preço: R$ {item.preco.toFixed(2)}</span>
            <span>Quantidade: {item.quantity}</span>
            <ItemActions>
              <button onClick={() => alterarQuantidade(item.id, -1)}>-</button>
              <button onClick={() => alterarQuantidade(item.id, 1)}>+</button>
              <RemoveButton onClick={() => removerItem(item.id)}>Remover</RemoveButton>
            </ItemActions>
          </ItemInfo>
        </CartItem>
      ))}
      <TotalBox>
        <span>Total:</span>
        <strong>R$ {total.toFixed(2)}</strong>
      </TotalBox>
      <CheckoutButton onClick={handleCheckout}>Finalizar Compra</CheckoutButton>
    </CartContainer>
  );
};

export default Cart;
