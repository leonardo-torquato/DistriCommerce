import React from "react";
import {
  UserContainer,
  Card,
  Title,
  InfoRow,
  Label,
  Value,
  LogoutButton,
  SectionTitle,
  PurchasesBox,
} from "./styles";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
const User = () => {
  const navigate = useNavigate();

  // Simulação de dados do usuário
  const usuario = {
    nome: "João da Silva",
    email: "joao@email.com",
    telefone: "(11) 91234-5678",
    endereco: "Rua das Flores, 123 - São Paulo/SP",
    totalCompras: 8,
    ultimaCompra: {
      produto: "Notebook Lenovo Ideapad 1i",
      data: "10/06/2024",
      valor: "R$ 2.500,00",
    },
  };

  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <UserContainer>
      <Card>
        <BackButton onClick={() => navigate("/")} style={{ marginBottom: 20 }}>
          Voltar
        </BackButton>
        <Title>Minha Conta</Title>
        <InfoRow>
          <Label>Nome:</Label>
          <Value>{usuario.nome}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Email:</Label>
          <Value>{usuario.email}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Telefone:</Label>
          <Value>{usuario.telefone}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Endereço:</Label>
          <Value>{usuario.endereco}</Value>
        </InfoRow>
        <PurchasesBox>
          <SectionTitle>Resumo de Compras</SectionTitle>
          <InfoRow>
            <Label>Total de compras:</Label>
            <Value>{usuario.totalCompras}</Value>
          </InfoRow>
          <InfoRow>
            <Label>Última compra:</Label>
            <Value>
              {usuario.ultimaCompra.produto} <br />
              <small>
                {usuario.ultimaCompra.data} - {usuario.ultimaCompra.valor}
              </small>
            </Value>
          </InfoRow>
        </PurchasesBox>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </Card>
    </UserContainer>
  );
};

export default User;
