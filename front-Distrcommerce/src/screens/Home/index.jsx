import React, { useEffect, useState } from 'react';
import { HomeContainer, ProductGrid } from './styles';
import ProductCard from '../../components/ProductCard';
import Carousel from '../../components/Carousel';
//import { getProducts } from '../../services/api';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Por enquanto vamos usar dados mockados
    const mockProducts = [
      {
        id: 1,
        title: "Notebook Lenovo Ideapad 1i",
        price: 2500,
        image: "https://a-static.mlcdn.com.br/1500x1500/notebook-lenovo-ideapad-1i-intel-core-i5-8gb-ram-ssd-512gb-windows-11-156-15iau7/magazineluiza/238006100/17c42205bcab59aafd9cdda3d73036da.jpg",
        rating: 4.5
      },
      {
        id: 2,
        title: "Iphone 12 Pro Max",
        price: 5000,
        image: "https://imgs.casasbahia.com.br/55029405/1g.jpg?imwidth=500",
        rating: 4.0
      },
      {
        id: 3,
        title: "Smartwatch W59 Pro",
        price: 1500,
        image: "https://a-static.mlcdn.com.br/800x560/relogio-smartwatch-inteligente-w59-pro-serie-9-tela-2-2-gps-nfc-ip68-w59-smart-watch/comercioeletronicoalzza/w59-r-05/aa1b939ed8a676d8d860d80ff6446be1.jpeg",
        rating: 5.0
      },
      {
        id: 4,
        title: "Celular Samsung Galaxy S24 Ultra",
        price: 5000,
        image: "https://a-static.mlcdn.com.br/1500x1500/celular-samsung-galaxy-s24-ultra-256gb-12gb-de-ram-tela-de-6-8-galaxy-ai/samsung/5747/5a98479355d15898f3b2c4b5a37a3786.jpeg",
        rating: 4.8
      },
    ];
    setProducts(mockProducts);

    // Quando tiver a API pronta, descomente isso:
    // getProducts().then(data => setProducts(data));
  }, []);

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
