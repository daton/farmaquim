package com.farmaquim

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class HolaMundo {

    @GetMapping("/hola")
    fun hola(): String
    {
        return "Hola mundo"

    }
}