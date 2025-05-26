import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './styles';

const BackButton = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)}>
      {/* Ícone de seta para a esquerda (Unicode) */}
      &#8592; {children || 'Voltar'}
    </Button>
  );
};

export default BackButton;

