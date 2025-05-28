import axios from 'axios';
import apiRoutes from './apiRoutes';

const api = axios.create();

// Cadastro de usuário
export const registerUser = async (data) => {
  try {
    const response = await api.post(apiRoutes.usuarios.cadastro(), data, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    throw error;
  }
};

// Login de usuário
export const loginUser = async (data) => {
  try {
    const response = await api.post(apiRoutes.usuarios.login(), data);
    return response.data; // Deve retornar o token JWT
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

// Buscar usuário por ID (rota protegida)
export const getUserById = async (id, token) => {
  try {
    const response = await api.get(apiRoutes.usuarios.buscar(id), {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw error;
  }
};

// Atualizar usuário (rota protegida)
export const updateUser = async (id, data, token) => {
  try {
    const response = await api.put(apiRoutes.usuarios.atualizar(id), data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    throw error;
  }
};

// Deletar usuário (rota protegida)
export const deleteUser = async (id, token) => {
  try {
    const response = await api.delete(apiRoutes.usuarios.deletar(id), {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    throw error;
  }
};

// Buscar usuário por email (rota protegida)
export const getUserByEmail = async (email, token) => {
  try {
    const response = await api.get(apiRoutes.usuarios.buscarPorEmail(email), {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuário por email:', error);
    throw error;
  }
};

export default api;
