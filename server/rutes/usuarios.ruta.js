const express = require('express');
const app = express();

/*=============================================
IMPORTAMOS EL CONTROLADOR
=============================================*/

const Usuarios = require('../controlers/usuarios.controlador');

/*=============================================
CREAMOS LAS RUTAS HTTP
=============================================*/

app.get('/mostrar-usuarios',  Usuarios.mostrarUsuarios);
app.get('/crear-usuario',  Usuarios.crearUsuario);



/*=============================================
EXPORTAMOS LA RUTA
=============================================*/

module.exports = app;