import React, { useState } from 'react';
import { CheckoutContainer, Section, Title, ItemList, Item, Total, Form, Input, Button, SuccessMsg } from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import apiRoutes from '../../services/apiRoutes';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Recupera os itens enviados via state; se não houver, inicia como array vazio
  const itens = location.state?.cart || [];
  // Os dados para entrega podem ser mantidos se desejar exibí-los na tela,
  // mas não serão enviados na requisição conforme a nova estrutura.
  const [form, setForm] = useState({ nome: '', endereco: '', telefone: '' });
  const [finalizado, setFinalizado] = useState(false);

  // Calcula o total com base na propriedade "quantity"
  const total = itens.reduce((acc, item) => acc + item.preco * item.quantity, 0);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const usuarioId = Number(localStorage.getItem('userId'));

    const payload = {
      usuarioId,
      itens: itens.map(item => ({
        produtoId: item.id,
        quantidade: item.quantity
      }))
    };

    try {
      const response = await fetch(apiRoutes.pedidos.criar(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        throw new Error('Erro ao criar pedido');
      }
      setFinalizado(true);
      alert('Pedido criado com sucesso!');
      localStorage.removeItem('cart');
      navigate('/');
    } catch (error) {
      alert('Erro ao confirmar pedido. Tente novamente.');
      console.error(error);
    }
  };


  return (
    <CheckoutContainer>
      <BackButton onClick={() => navigate(-1)} style={{ marginBottom: 20 }}>
        Voltar
      </BackButton>
      <Title>Finalizar Compra</Title>
      <Section>
        <h3>Resumo do Pedido</h3>
        <ItemList>
          {itens.map(item => (
            <Item key={item.id}>
              <span>{item.nome} (x{item.quantity})</span>
              <span>R$ {(item.preco * item.quantity).toFixed(2)}</span>
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
