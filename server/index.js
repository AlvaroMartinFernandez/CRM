/*=============================================
UBICAMOS LOS REQUERIMIENTOS
=============================================*/
require('./config');

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const Sequelize = require('sequelize');


/*=============================================
CREAMOS UNA VARIABLE PARA TENER TODAS LAS FUNCIONALIDADES DE EXPRESS
=============================================*/

const app = express();

/*=============================================
MIDDLEWARE PARA BODY PARSER
=============================================*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// parse application/json
app.use(bodyParser.json({ limit: '10mb', extended: true }));

/*=============================================
MIDDLEWARE PARA FILEUPLOAD
=============================================*/

// default options express-fileupload
app.use(fileUpload());


/*=============================================
EJECUTANDO CORS
=============================================*/

app.use(cors());




/*=============================================
IMPORTAMOS LAS RUTAS
=============================================*/


app.use(require('./rutes/usuarios.ruta'));


/*=============================================
IMPORTAMOS MODULO CONEXION BASE DE DATOS
=============================================*/
const sequelize = require('./db/db');

/*=============================================
SALIDA PUERTO HTTP
=============================================*/
app.listen(process.env.PORT, () => {

    console.log(`Habilitado el puerto ${process.env.PORT}`)
})

