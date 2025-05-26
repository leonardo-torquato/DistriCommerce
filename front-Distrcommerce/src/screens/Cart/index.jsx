import React, { useState } from 'react';
import { CartContainer, CartItem, ItemInfo, ItemActions, RemoveButton, TotalBox, CheckoutButton, EmptyCart } from './styles';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
// Simulação de itens no carrinho
const itensIniciais = [
  {
    id: 1,
    nome: "Notebook Lenovo Ideapad 1i",
    preco: 2500,
    quantidade: 1,
    imagem: "https://a-static.mlcdn.com.br/1500x1500/notebook-lenovo-ideapad-1i-intel-core-i5-8gb-ram-ssd-512gb-windows-11-156-15iau7/magazineluiza/238006100/17c42205bcab59aafd9cdda3d73036da.jpg"
  },
  {
    id: 2,
    nome: "Iphone 12 Pro Max",
    preco: 5000,
    quantidade: 2,
    imagem: "https://imgs.casasbahia.com.br/55029405/1g.jpg?imwidth=500"
  }
];

const Cart = () => {
  const [itens, setItens] = useState(itensIniciais);
  const navigate = useNavigate();

  const alterarQuantidade = (id, delta) => {
    setItens(itens =>
      itens.map(item =>
        item.id === id
          ? { ...item, quantidade: Math.max(1, item.quantidade + delta) }
          : item
      )
    );
  };

  const removerItem = (id) => {
    setItens(itens => itens.filter(item => item.id !== id));
  };

  const total = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

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
            <span>Quantidade: {item.quantidade}</span>
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
      <CheckoutButton onClick={() => navigate('/checkout')}>Finalizar Compra</CheckoutButton>
    </CartContainer>
  );
};

export default Cart;
