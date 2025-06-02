import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import { OrdersContainer, OrderCard, Title, OrderInfo } from '../Orders/styles';

const UserProducts = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [productForm, setProductForm] = useState({ nome: '', descricao: '', preco: '', estoque: '' });
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Assumindo que há um endpoint para buscar produtos do fornecedor
        const response = await fetch(`http://localhost:8082/api/produtos`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [token, userId]);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => {
    setModalOpen(false);
    setProductForm({ nome: '', descricao: '', preco: '', estoque: '' });
  };

  const handleFormChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8082/api/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          nome: productForm.nome,
          descricao: productForm.descricao,
          preco: Number(productForm.preco),
          estoque: Number(productForm.estoque)
        })
      });
      if (!response.ok) {
        throw new Error('Erro ao cadastrar produto');
      }
      // Atualiza a lista de produtos após cadastro
      const novoProduto = await response.json();
      setProducts(prev => [novoProduto, ...prev]);
      handleModalClose();
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar produto');
    }
  };

  return (
    <OrdersContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
        <button
          onClick={handleModalOpen}
          style={{ padding: '0.75rem', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold' }}
        >
          Novo Produto
        </button>
      </div>
      <Title>Meus Produtos</Title>
      {products.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        products.map(produto => (
          <OrderCard key={produto.id}>
            <OrderInfo>
              <strong>ID:</strong> {produto.id}
            </OrderInfo>
            <OrderInfo>
              <strong>Nome:</strong> {produto.nome}
            </OrderInfo>
            <OrderInfo>
              <strong>Descrição:</strong> {produto.descricao}
            </OrderInfo>
            <OrderInfo>
              <strong>Preço:</strong> R$ {Number(produto.preco).toFixed(2)}
            </OrderInfo>
            <OrderInfo>
              <strong>Estoque:</strong> {produto.estoque}
            </OrderInfo>
          </OrderCard>
        ))
      )}

      {/* Modal para cadastro de novo produto */}
      {modalOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ background: '#fff', padding: '2rem', borderRadius: 8, width: '90%', maxWidth: 400 }}>
            <h2>Novo Produto</h2>
            <form onSubmit={handleProductSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={productForm.nome}
                onChange={handleFormChange}
                required
                style={{ padding: '0.75rem' }}
              />
              <input
                type="text"
                name="descricao"
                placeholder="Descrição"
                value={productForm.descricao}
                onChange={handleFormChange}
                required
                style={{ padding: '0.75rem' }}
              />
              <input
                type="number"
                name="preco"
                placeholder="Preço"
                value={productForm.preco}
                onChange={handleFormChange}
                required
                style={{ padding: '0.75rem' }}
              />
              <input
                type="number"
                name="estoque"
                placeholder="Estoque"
                value={productForm.estoque}
                onChange={handleFormChange}
                required
                style={{ padding: '0.75rem' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type="submit" style={{ padding: '0.75rem', background: '#28a745', color: '#fff', border: 'none', borderRadius: 4 }}>
                  Cadastrar
                </button>
                <button type="button" onClick={handleModalClose} style={{ padding: '0.75rem', background: '#d32f2f', color: '#fff', border: 'none', borderRadius: 4 }}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </OrdersContainer>
  );
};

export default UserProducts;
