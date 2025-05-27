import React, { useState } from 'react';
import { RegisterContainer, Form, Input, Button, LinkText, Logo } from './styles';
import { registerUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const navigate = useNavigate();
  
  const handleChange = e => setForm({
    ...form,
    [e.target.name]: e.target.value
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await registerUser(form)
      alert('Usuário cadastrado com sucesso!');
      navigate('/login');    
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário. Tente novamente.');
    }
  };

  return (
    <RegisterContainer>
      <Logo src="/logo.png" alt="Distrcommerce Logo" />
      <h2>Entrar</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="nome"
          placeholder="Nome Completo"
          value={form.nome}
          onChange={handleChange}
          required />
        <Input
          type="password"
          name="senha"
          placeholder="Senha"
          value={form.senha}
          onChange={handleChange}
          required
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
      <LinkText to="/login">Já tem uma conta? Faça login</LinkText>
    </RegisterContainer>
  );
};

export default Register;
