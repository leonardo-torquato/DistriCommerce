import styled from 'styled-components';

export const CartContainer = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 2rem;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
    background: #f5f5f5;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ItemActions = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.3rem 0.7rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #0056b3;
    }
  }
`;

export const RemoveButton = styled.button`
  background: #d32f2f !important;
  &:hover {
    background: #b71c1c !important;
  }
`;

export const TotalBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  margin: 2rem 0 1rem 0;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;
  &:hover {
    background: #218838;
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  color: #888;
  font-size: 1.2rem;
  padding: 3rem 0;
`;
