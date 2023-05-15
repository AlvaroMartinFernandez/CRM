const express = require('express');
const app = express();

/*=============================================
IMPORTAMOS EL CONTROLADOR
=============================================*/

const Usuarios = require('../controlers/usuarios.controlador');


/*=============================================
IMPORTAMOS EL MIDDLEWARE
=============================================*/

const { verificarToken } = require('../middlewares/autenticacion');

/*=============================================
CREAMOS LAS RUTAS HTTP
=============================================*/

app.get('/mostrar-usuarios',verificarToken,  Usuarios.mostrarUsuarios);
app.post('/crear-usuario',verificarToken,  Usuarios.crearUsuario);
app.post('/login',  Usuarios.login);



/*=============================================
EXPORTAMOS LA RUTA
=============================================*/

module.exports = app;