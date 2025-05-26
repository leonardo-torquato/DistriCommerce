import React from 'react';
import { Search, ShoppingCart, Person } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  Logo,
  SearchBar,
  SearchInput,
  NavItems
} from './styles';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>DistrCommerce</Logo>
      <SearchBar>
        <SearchInput type="text" placeholder="Search products..." />
        <IconButton>
          <Search style={{ color: 'white' }} />
        </IconButton>
      </SearchBar>
      <NavItems>
        <IconButton onClick={() => navigate('/user')}>
          <Person style={{ color: 'white' }} />
        </IconButton>
        <IconButton onClick={() => navigate('/cart')}>
          <ShoppingCart style={{ color: 'white' }} />
        </IconButton>
      </NavItems>
    </HeaderContainer>
  );
};

export default Header;
