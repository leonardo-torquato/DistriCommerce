# Monitoramento com Prometheus e Grafana

# Suba os containers utilizando o Docker Compose:
docker-compose up -d

Esse comando irá compilar (se necessário) e iniciar os containers do Prometheus e do Grafana em background.

# Acessando as interfaces
# Prometheus:
# Abra o navegador e acesse http://localhost:9090 para verificar as métricas expostas pela sua API Gateway.

# Grafana:
# Abra o navegador e acesse http://localhost:3000.

# As credenciais padrão para o Grafana são:
# Usuário: admin
# Senha: admin

Configurando o Grafana
Após o login, clique em Configuration (ícone de engrenagem) e depois em Data Sources.
Clique em Add data source e selecione Prometheus.
Configure:
URL: http://prometheus:9090 (ou http://localhost:9090 se preferir testar localmente)
Clique em Save & Test para confirmar que o Grafana conseguiu conectar ao Prometheus.
Crie dashboards personalizados para visualizar as métricas conforme sua necessidade.
