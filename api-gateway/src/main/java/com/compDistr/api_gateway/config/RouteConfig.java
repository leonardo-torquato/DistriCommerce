package com.compDistr.api_gateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RouteConfig {

    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
        return builder.routes()

            // API 1 - Usuários e Produtos (porta 8080)
            .route("usuarios_produtos", r -> r.path("/api/usuarios/**", "/api/produtos/**")
                .uri("http://localhost:8080"))

            // API 2 - Pedidos, Pagamentos, Logística (porta 8081) com Circuit Breaker
            .route("pedidos_pagamentos_logistica", r -> r.path("/api/pedidos/**", "/api/pagamentos/**", "/api/logistica/**")
                .filters(f -> f
                    .circuitBreaker(config -> config
                        .setName("pedidosCircuitBreaker")
                        .setFallbackUri("forward:/fallback/pedidos")))
                .uri("http://localhost:8081"))

            .build();
    }
}

