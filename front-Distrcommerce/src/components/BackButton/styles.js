import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #f0f4fa;
  color: #131921;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #dbeafe;
    color: #007bff;
  }
`;
