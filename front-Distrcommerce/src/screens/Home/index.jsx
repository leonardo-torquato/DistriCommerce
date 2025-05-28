import { useEffect, useState } from 'react';
import { HomeContainer, ProductGrid } from './styles';
import ProductCard from '../../components/ProductCard';
import Carousel from '../../components/Carousel';
import { getProducts } from '../../services/api';

const Home = ({ searchTerm }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(data => {
        setAllProducts(data);
        setProducts(data);
      })
      .catch(() => {
        setAllProducts([]);
        setProducts([]);
      });
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setProducts(allProducts);
    } else {
      setProducts(
        allProducts.filter(product =>
          product.nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.title?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, allProducts]);

  return (
    <HomeContainer>
      <Carousel />
      <h1>Produtos em Destaque</h1>
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </HomeContainer>
  );
};

export default Home;
