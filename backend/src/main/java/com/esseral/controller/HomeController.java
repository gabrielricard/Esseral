package com.esseral.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200") // Autorise Angular à accéder aux données
public class HomeController {

    @GetMapping("/message")
    public String getMessage() {
        return "Bienvenue sur mon application Spring Boot + Angular!";
    }
}

