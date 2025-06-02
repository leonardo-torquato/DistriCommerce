import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrdersContainer, OrderCard, Title, OrderInfo } from './styles';
import BackButton from '../../components/BackButton';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [productNames, setProductNames] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      try {
        const response = await fetch(`http://localhost:8082/api/pedidos/usuario/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!response.ok) {
          throw new Error('Erro ao buscar pedidos');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, []);

  // Após os pedidos serem carregados, extrai os IDs dos produtos e busca seus nomes
  useEffect(() => {
    if (orders.length > 0) {
      const productIds = new Set();
      orders.forEach(order => {
        order.itens.forEach(item => productIds.add(item.produtoId));
      });
      const fetchProducts = async () => {
        try {
          const entries = await Promise.all(
            Array.from(productIds).map(async productId => {
              const response = await fetch(`http://localhost:8082/api/produtos/${productId}`);
              if (!response.ok) {
                throw new Error(`Erro ao buscar produto ${productId}`);
              }
              const data = await response.json();
              return [productId, data.nome];
            })
          );
          setProductNames(Object.fromEntries(entries));
        } catch (error) {
          console.error(error);
        }
      };
      fetchProducts();
    }
  }, [orders]);

  return (
    <OrdersContainer>
      <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
      <Title>Meus Pedidos</Title>
      {orders.length === 0 ? (
        <p>Nenhum pedido encontrado.</p>
      ) : (
        orders.map(order => (
          <OrderCard key={order.id}>
            <OrderInfo>
              <strong>ID:</strong> {order.id}
            </OrderInfo>
            <OrderInfo>
              <strong>Total:</strong> R$ {order.total.toFixed(2)}
            </OrderInfo>
            <OrderInfo>
              <strong>Data:</strong> {new Date(order.dataCriacao).toLocaleString()}
            </OrderInfo>
            <OrderInfo>
              <strong>Status:</strong> {order.status}
            </OrderInfo>
            <OrderInfo>
              <strong>Itens:</strong>
              <ul>
                {order.itens.map((item, index) => (
                  <li key={index}>
                    Produto: {productNames[item.produtoId] || 'Carregando...'} - Quantidade: {item.quantidade} - Preço Unitário: R$ {item.precoUnitario.toFixed(2)}
                  </li>
                ))}
              </ul>
            </OrderInfo>
          </OrderCard>
        ))
      )}
    </OrdersContainer>
  );
};

export default Orders;
