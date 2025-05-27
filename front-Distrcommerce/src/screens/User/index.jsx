import { useEffect, useState } from 'react';
import { getUserById, updateUser, deleteUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
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
      const userId = userIdStr ? Number(userIdStr) : null;
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
    <div>
      {edit ? (
        <form onSubmit={handleUpdate}>
          <input name="nome" value={form.nome} onChange={handleChange} />
          <input name="email" value={form.email} onChange={handleChange} />
          <button type="submit">Salvar</button>
          <button type="button" onClick={() => setEdit(false)}>Cancelar</button>
        </form>
      ) : (
        <>
          <p>Nome: {user.nome}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => setEdit(true)}>Editar</button>
          <button onClick={handleDelete}>Excluir Conta</button>
        </>
      )}
    </div>
  );
};

export default User;