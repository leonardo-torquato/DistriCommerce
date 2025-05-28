import { useEffect, useState, useRef } from 'react';
import { getUserById, updateUser, deleteUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { UserContainer, Card, Title, InfoRow, Label, Value, LogoutButton } from './styles';
import BackButton from '../../components/BackButton';

const User = () => {
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({ nome: '', email: '' });
  const navigate = useNavigate();

  const sessionAlertedRef = useRef(false);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      const userIdStr = localStorage.getItem('userId');
      // userId pode ser string (email) se vier do sub do JWT
      const userId = userIdStr && !isNaN(Number(userIdStr)) ? Number(userIdStr) : userIdStr;
      console.log('DEBUG: token', token); // depuração
      console.log('DEBUG: userId', userId); // depuração
      if (token && userId) {
        try {
          let data;
          data = await getUserById(userId, token);
          console.log('DEBUG: getUserById/getUserByEmail data', data); // depuração
          setUser(data);
          setForm({ nome: data.nome, email: data.email });
        } catch (err) {
          console.error('DEBUG: erro ao buscar usuário', err); // depuração
          if (!sessionAlertedRef.current) {
            sessionAlertedRef.current = true;
            alert('Sessão expirada. Faça login novamente.');
            navigate('/login');
          }
        }
      } else {
        console.warn('DEBUG: token ou userId ausente'); // depuração
      }
    };
    fetchUser();
  }, [navigate]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    try {
      const updated = await updateUser(userId, form, token);
      setUser(updated);
      setEdit(false);
      alert('Dados atualizados!');
    } catch {
      alert('Erro ao atualizar dados.');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Deseja realmente excluir sua conta?')) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      try {
        await deleteUser(userId, token);
        localStorage.clear();
        alert('Conta excluída.');
        navigate('/register');
      } catch {
        alert('Erro ao excluir conta.');
      }
    }
  };

  if (!user) {
    console.log('DEBUG: user está nulo, renderizando Carregando...'); // depuração
    return <div>Carregando...</div>;
  }

  return (
    <UserContainer>
      <BackButton onClick={() => navigate('/')} style={{ marginBottom: 20 }}>Voltar</BackButton>
      <Card>
        <Title>Minha Conta</Title>
        {edit ? (
          <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label>
              Nome:
              <input name="nome" value={form.nome} onChange={handleChange} style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: 4 }} />
            </label>
            <label>
              Email:
              <input name="email" value={form.email} onChange={handleChange} style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: 4 }} />
            </label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="submit" style={{ padding: '0.75rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>Salvar</button>
              <button type="button" onClick={() => setEdit(false)} style={{ padding: '0.75rem', background: '#d32f2f', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>Cancelar</button>
            </div>
          </form>
        ) : (
          <>
            <InfoRow>
              <Label>Nome:</Label>
              <Value>{user.nome}</Value>
            </InfoRow>
            <InfoRow>
              <Label>Email:</Label>
              <Value>{user.email}</Value>
            </InfoRow>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button onClick={() => setEdit(true)} style={{ padding: '0.75rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>Editar</button>
              <LogoutButton onClick={handleDelete}>Excluir Conta</LogoutButton>
            </div>
          </>
        )}
      </Card>
    </UserContainer>
  );
};

export default User;