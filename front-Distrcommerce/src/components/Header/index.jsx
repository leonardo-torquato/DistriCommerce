import React, { useState } from 'react';
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

const Header = ({ onSearch }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleInput = e => setSearch(e.target.value);
  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(search);
    }
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>DistrCommerce</Logo>
      <form onSubmit={handleSearch} style={{ flex: 1 }}>
        <SearchBar>
          <SearchInput type="text" placeholder="Search products..." value={search} onChange={handleInput} />
          <IconButton type="submit">
            <Search style={{ color: 'white' }} />
          </IconButton>
        </SearchBar>
      </form>
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
