# DistriCommerce - Sistema Distribuído de E-commerce

Este projeto é composto por quatro aplicações principais, integradas para formar uma solução completa de e-commerce distribuído, utilizando microsserviços, mensageria, autenticação JWT e frontend moderno.

## Visão Geral da Arquitetura

```
+-------------------+         +-------------------+         +-------------------+
|                   |         |                   |         |  Microsserviços:  |
|     Frontend      | <-----> |    API Gateway    | <-----> |  Pedidos,         |
|                   |         |                   |         |  Produtos,        |
+-------------------+         +-------------------+         |  Pagamentos,      |
                                                            |  Logística        |
                                                            +-------------------+
```

- **front-Distrcommerce/**: Aplicação React para interface do usuário.
- **api-gateway/**: API Gateway com Spring Cloud Gateway, roteando e protegendo as requisições.
- **districommerce/**: Microsserviço de Produtos e Usuários (Spring Boot, PostgreSQL, JWT).
- **districommerce_pedidos/**: Microsserviço de Pedidos, Pagamentos e Logística (Spring Boot, MongoDB, RabbitMQ).

---

## Aplicações

### 1. [front-Distrcommerce/](front-Distrcommerce)

- **Tecnologia:** React 19, Styled Components, React Router, Axios.
- **Funcionalidade:** Interface web para cadastro, login, listagem de produtos, carrinho, checkout, histórico de compras, status de pedidos e pagamentos.
- **Como rodar:**  
  ```sh
  cd front-Distrcommerce
  npm install
  npm run dev
  ```
- **Configuração:** O frontend espera que o backend esteja rodando em `localhost` nas portas padrão.

---

### 2. [api-gateway/](api-gateway)

- **Tecnologia:** Spring Cloud Gateway, Circuit Breaker, Actuator.
- **Funcionalidade:**  
  - Roteamento centralizado para os microsserviços.
  - Proteção das rotas via autenticação JWT.
  - Circuit breaker para resiliência.
- **Principais rotas:**
  - `/api/usuarios/**` e `/api/produtos/**` → districommerce (porta 8080)
  - `/api/pedidos/**`, `/api/pagamentos/**`, `/api/logistica/**` → districommerce_pedidos (porta 8081)
- **Como rodar:**  
  ```sh
  cd api-gateway
  ./mvnw spring-boot:run
  ```

---

### 3. [districommerce/](districommerce)

- **Tecnologia:** Spring Boot, PostgreSQL, MongoDB, JWT, Spring Security.
- **Funcionalidade:**
  - Cadastro e login de usuários (JWT).
  - CRUD de produtos.
  - Integração com outros microsserviços via REST.
- **Principais rotas:**
  - `POST /api/usuarios/cadastro` - Cadastro de usuário
  - `POST /api/usuarios/login` - Login (retorna JWT)
  - `GET /api/produtos` - Listar produtos
  - `POST /api/produtos` - Criar produto
- **Como rodar:**  
  ```sh
  cd districommerce
  ./mvnw spring-boot:run
  ```
- **Banco de dados:**  
  - PostgreSQL (produtos, usuários)
  - MongoDB (logs, integração)

---

### 4. [districommerce_pedidos/](districommerce_pedidos)

- **Tecnologia:** Spring Boot, MongoDB, RabbitMQ.
- **Funcionalidade:**
  - Gerenciamento de pedidos.
  - Processamento de pagamentos (simulado, com aprovação/recusa aleatória).
  - Gerenciamento de logística (simulação de etapas: separação, envio, entrega).
  - Comunicação assíncrona via RabbitMQ.
- **Principais rotas:**
  - `POST /api/pedidos` - Criar pedido
  - `GET /api/pedidos/usuario/{usuarioId}` - Listar pedidos do usuário
  - `POST /api/pagamentos/processar` - Processar pagamento
  - `GET /api/pagamentos/pedido/{pedidoId}` - Status do pagamento
  - `POST /api/logistica/iniciar` - Iniciar logística
  - `GET /api/logistica/pedido/{pedidoId}` - Status da logística
- **Como rodar:**  
  ```sh
  cd districommerce_pedidos
  ./mvnw spring-boot:run
  ```
- **Dependências:**  
  - MongoDB (coleções: pedidos, pagamentos, logisticas)
  - RabbitMQ (filas: pagamento.processar, pagamento.resultado, logistica.iniciar, logistica.atualizacao)

---

## Como Executar o Projeto Completo

1. **Suba o MongoDB e RabbitMQ** (há docker-compose em cada backend):
   ```sh
   cd districommerce
   docker-compose up -d
   cd ../districommerce_pedidos
   docker-compose up -d
   ```
2. **Suba os microsserviços**:
   - districommerce: `./mvnw spring-boot:run`
   - districommerce_pedidos: `./mvnw spring-boot:run`
   - api-gateway: `./mvnw spring-boot:run`
3. **Suba o frontend**:
   ```sh
   cd front-Distrcommerce
   npm install
   npm run dev
   ```
4. **Acesse o sistema**:  
   - Frontend: [http://localhost:5173](http://localhost:5173) (ou porta definida pelo Vite)
   - API Gateway: [http://localhost:8080](http://localhost:8080) (rotas protegidas via JWT)

---

## Fluxos Principais

- **Cadastro/Login:**  
  Usuário se cadastra e faz login, recebendo um token JWT.
- **Produtos:**  
  Listagem e cadastro de produtos (admin).
- **Pedidos:**  
  Usuário cria pedidos, que são processados e salvos no MongoDB.
- **Pagamentos:**  
  Pagamento é enviado para fila RabbitMQ, processado de forma assíncrona.
- **Logística:**  
  Processo de entrega simulado, com atualizações de status via fila.

---

## Observações

- Todas as rotas (exceto cadastro/login) exigem JWT no header:  
  `Authorization: Bearer SEU_TOKEN_AQUI`
- O serviço de pagamentos e logística são simulados e assíncronos.
- Monitoramento do RabbitMQ: [http://localhost:15673](http://localhost:15673) (guest/guest)
- MongoDB: [mongodb://localhost:27017/districommerce](mongodb://localhost:27017/districommerce)

---

## Créditos

Projeto acadêmico de Computação Distribuída, por e pelos alunos:
- Leonardo Lima [https://github.com/leonardo-torquato]
- Natanael Otaviano [https://github.com/devNatanael]
- Isaac José [https://github.com/zaaczs]
- Pedro Gabriel [https://github.com/theRealPedroGabriel]