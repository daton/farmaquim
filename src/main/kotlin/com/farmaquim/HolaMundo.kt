package com.farmaquim

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class HolaMundo {

    @GetMapping("/hola")
    @CrossOrigin(origins = ["http://localhost:3000"])
    fun hola(): String
    {
        return "Drogueria y productos de belleza de Miriam"

    }
    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/mensaje")
    fun enviarMensaje():Mensaje{
        var mensaje=Mensaje();
        mensaje.titulo="Primero"
        mensaje.cuerpo="Holita holita"
        return mensaje
    }
}