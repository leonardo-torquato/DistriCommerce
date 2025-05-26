import styled from 'styled-components';

export const UserContainer = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6fa;
`;

export const Card = styled.div`
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  max-width: 420px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #131921;
  margin-bottom: 2rem;
  text-align: center;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.1rem;
  align-items: flex-start;
`;

export const Label = styled.span`
  font-weight: bold;
  color: #232f3e;
  min-width: 110px;
`;

export const Value = styled.span`
  color: #444;
  text-align: right;
  word-break: break-word;
`;

export const SectionTitle = styled.h2`
  font-size: 1.1rem;
  color: #007bff;
  margin: 1.5rem 0 0.7rem 0;
  font-weight: bold;
`;

export const PurchasesBox = styled.div`
  background: #f0f4fa;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background 0.2s;
  &:hover {
    background: #b71c1c;
  }
`;
