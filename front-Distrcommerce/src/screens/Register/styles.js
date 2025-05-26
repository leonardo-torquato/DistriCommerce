import styled from 'styled-components';

export const RegisterContainer = styled.div`
  padding: 2rem;
  max-width: 400px;
  margin: 4rem auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
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
  padding: 0.75rem;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;

export const LinkText = styled.span`
  color: #007bff;
  cursor: pointer;
  margin-top: 1rem;
  display: inline-block;
  text-decoration: underline;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 1.5rem 0;
  color: #131921;
  font-family: inherit;
  cursor: pointer;
`;
