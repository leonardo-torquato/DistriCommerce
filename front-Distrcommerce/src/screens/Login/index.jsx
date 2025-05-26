import React, { useState } from 'react';
import { LoginContainer, Form, Input, Button, LinkText, Logo } from './styles';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    navigate('/user');
  };

  return (
    <LoginContainer>
      <Logo>Distrcommerce</Logo>
      <h2>Entrar</h2>
      <Form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
      </Form>
      <LinkText onClick={() => navigate('/register')}>
        Não tem uma conta? Cadastre-se
      </LinkText>
    </LoginContainer>
  );
};

export default Login;
