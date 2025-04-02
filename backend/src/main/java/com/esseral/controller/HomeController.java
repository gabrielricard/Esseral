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
        return "Vous avez ce je ne sais quoi qui vous rend unique. Que ce soit à travers votre identité, votre vision ou votre façon d’interagir avec le monde, cette singularité est votre plus grande force. Esseral vous aide à révéler l’essence de votre projet, à affirmer vos valeurs et à structurer votre communication pour marquer les esprits." + "Avec un accompagnement clé en main ou à la carte, nous vous aidons à lancer ou à renforcer votre présence en ligne avec clarté et impact. Visez juste, engagez votre audience et bâtissez une communauté qui vous fera grandir..";
    }
}

