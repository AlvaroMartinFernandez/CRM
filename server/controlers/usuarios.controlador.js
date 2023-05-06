/*=============================================
IMPORTAMOS EL MODELO
=============================================*/
const { Usuario } = require('../models/usuarios.modelo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/*=============================================
FUNCIÓN GET
=============================================*/

let mostrarUsuarios = async (req, res)=>{


	try {
		const users = await Usuario.findAll();
		res.status(200).json(users);
	  } catch (error) {
		res.status(500).json({ message: 'error en la solicitud.'});
		console.log(error);
	  }
	};




/*=============================================
FUNCIÓN POST
=============================================*/

let crearUsuario = async (req, res) => {
  try {
    const { username, name, email, password, birthday, departament, position } = req.body;
    const usuario = await Usuario.create({
      username: 'ALVARO',
      name: 'MARTIN',
      email: 'ALVARO27993@gmail.com',
      password: '123456',
      birthday: '',
      departament: 'it',
      position: 'director'
    });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'error en la solicitud.'});
	console.log(error);
  }
};

/*=============================================
EXPORTAMOS LAS FUNCIONES DEL CONTROLADOR
=============================================*/


module.exports = {

	mostrarUsuarios,
	crearUsuario 
}