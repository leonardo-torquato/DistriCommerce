import React, { useState } from 'react';
import { CheckoutContainer, Section, Title, ItemList, Item, Total, Form, Input, Button, SuccessMsg } from './styles';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
// Simulação de itens do carrinho
const itens = [
  {
    id: 1,
    nome: "Notebook Lenovo Ideapad 1i",
    preco: 2500,
    quantidade: 1
  },
  {
    id: 2,
    nome: "Iphone 12 Pro Max",
    preco: 5000,
    quantidade: 2
  }
];

const Checkout = () => {
  const [form, setForm] = useState({ nome: '', endereco: '', telefone: '' });
  const [finalizado, setFinalizado] = useState(false);
  const navigate = useNavigate();

  const total = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFinalizado(true);
  };

  return (
    <CheckoutContainer>
      <BackButton onClick={() => navigate(-1)} style={{ marginBottom: 20 }}>Voltar</BackButton>
      <Title>Finalizar Compra</Title>
      <Section>
        <h3>Resumo do Pedido</h3>
        <ItemList>
          {itens.map(item => (
            <Item key={item.id}>
              <span>{item.nome} (x{item.quantidade})</span>
              <span>R$ {(item.preco * item.quantidade).toFixed(2)}</span>
            </Item>
          ))}
        </ItemList>
        <Total>
          <span>Total:</span>
          <strong>R$ {total.toFixed(2)}</strong>
        </Total>
      </Section>
      <Section>
        <h3>Dados para Entrega</h3>
        <Form onSubmit={handleSubmit}>
          <Input
            name="nome"
            placeholder="Nome completo"
            value={form.nome}
            onChange={handleChange}
            required
          />
          <Input
            name="endereco"
            placeholder="Endereço"
            value={form.endereco}
            onChange={handleChange}
            required
          />
          <Input
            name="telefone"
            placeholder="Telefone"
            value={form.telefone}
            onChange={handleChange}
            required
          />
          <Button type="submit">Confirmar Pedido</Button>
        </Form>
        {finalizado && <SuccessMsg>Pedido realizado com sucesso!</SuccessMsg>}
      </Section>
    </CheckoutContainer>
  );
};

export default Checkout;
