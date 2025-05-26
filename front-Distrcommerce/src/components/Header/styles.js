import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #131921;
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  cursor: pointer;
`;

export const SearchBar = styled.div`
  display: flex;
  flex: 1;
  margin: 0 2rem;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 4px 0 0 4px;
  height: 40px;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
