import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #131921;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
`;

export const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 0.9rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;
  &:hover {
    background: #0056b3;
  }
`;

export const SuccessMsg = styled.div`
  color: #28a745;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
`;
