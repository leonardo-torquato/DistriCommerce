const baseUrlUsuariosProdutos = 'http://localhost:8082';
const baseUrlPedidosPagamentosLogistica = 'http://localhost:8082';

const apiRoutes = {
  usuarios: {
    cadastro: () => `${baseUrlUsuariosProdutos}/api/usuarios/cadastro`,
    login: () => `${baseUrlUsuariosProdutos}/api/usuarios/login`,
    buscar: (id) => `${baseUrlUsuariosProdutos}/api/usuarios/${id}`,
    buscarPorEmail: (email) => `${baseUrlUsuariosProdutos}/api/usuarios/email/${email}`,
    atualizar: (id) => `${baseUrlUsuariosProdutos}/api/usuarios/${id}`,
    deletar: (id) => `${baseUrlUsuariosProdutos}/api/usuarios/${id}`,
  },
  produtos: {
    criar: () => `${baseUrlUsuariosProdutos}/api/produtos`,
    listar: () => `${baseUrlUsuariosProdutos}/api/produtos`,
    buscar: (id) => `${baseUrlUsuariosProdutos}/api/produtos/${id}`,
    deletar: (id) => `${baseUrlUsuariosProdutos}/api/produtos/${id}`,
  },
  pedidos: {
    criar: () => `${baseUrlPedidosPagamentosLogistica}/api/pedidos`,
    buscarPorId: (id) => `${baseUrlPedidosPagamentosLogistica}/api/pedidos/${id}`,
    buscarPorUsuario: (usuarioId) => `${baseUrlPedidosPagamentosLogistica}/api/pedidos/usuario/${usuarioId}`,
  },
  pagamentos: {
    processar: () => `${baseUrlPedidosPagamentosLogistica}/api/pagamentos/processar`,
    status: (pedidoId) => `${baseUrlPedidosPagamentosLogistica}/api/pagamentos/pedido/${pedidoId}`,
  },
  logistica: {
    iniciar: () => `${baseUrlPedidosPagamentosLogistica}/api/logistica/iniciar`,
    status: (pedidoId) => `${baseUrlPedidosPagamentosLogistica}/api/logistica/pedido/${pedidoId}`,
  },
};

export default apiRoutes;