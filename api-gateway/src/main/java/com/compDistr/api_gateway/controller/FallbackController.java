package com.compDistr.api_gateway.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FallbackController {

    @RequestMapping("/fallback/pedidos")
    public ResponseEntity<String> fallbackPedidos() {
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                .body("Serviço de pedidos está temporariamente indisponível. Tente novamente mais tarde.");
    }
}
