import { LoginContainer, Form, Input, Button, LinkText, Logo } from './styles';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api'; // Importa a função de login

const Login = () => {

  const [form, setForm] = useState({email: '', senha: ''});
  const navigate = useNavigate();

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await loginUser(form);
      let token, userId;
      if (typeof result === 'object' && result.token && result.userId) {
        token = result.token;
        userId = result.userId; // userId deve ser retornado pelo backend como long
      } else {
        token = result;
        userId = null; // Se não houver userId, defina como null ou trate conforme necessário
      }
      localStorage.setItem('token', token);
      if (userId !== null) {
        localStorage.setItem('userId', userId);
      }
      alert('Login realizado com sucesso!');
      navigate('/user');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <LoginContainer>
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
    </LoginContainer>
  );
};

export default Login;
