import { LoginContainer, Form, Input, Button, LinkText, Logo } from './styles';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, getUserByEmail } from '../../services/api'; // Importa a função de login e getUserByEmail
import { parseJwt } from '../../services/jwt';
import BackButton from '../../components/BackButton';

const Login = () => {

  const [form, setForm] = useState({email: '', senha: ''});
  const navigate = useNavigate();

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await loginUser(form);
      let token;
      if (typeof result === 'object' && result.token) {
        token = result.token;
      } else {
        token = result;
      }
      // Decodifica o token para extrair o email
      const payload = parseJwt(token);
      const email = payload && (payload.userId || payload.id || payload.sub || payload.user_id);
      localStorage.setItem('token', token);
      // Busca o usuário pelo email para obter o id real
      if (email) {
        const userData = await getUserByEmail(email, token); // agora busca corretamente pelo endpoint de email
        if (userData && userData.id) {
          localStorage.setItem('userId', userData.id);
        }
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
        <Button type="submit">Entrar</Button>
      </Form>
      <Link to="/register" style={{ textDecoration: 'none', color: '#007bff', marginTop: '16px' }}>
        Não tem uma conta? Cadastre-se
      </Link>
    </LoginContainer>
  );
};

export default Login;
