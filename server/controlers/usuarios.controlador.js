/*=============================================
IMPORTAMOS EL MODELO
=============================================*/
const  Usuario  = require('../models/usuarios.modelo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



/*=============================================
FUNCIÓN GET TODOS LOS USUARIOS
=============================================*/

let mostrarUsuarios = async (req, res)=>{


	try {
		const users = await Usuario.findAll();
		res.status(200).json(users);
	  } catch (error) {
		res.status(500).json({ message: 'error en la solicitud.'+error});
	  }
	};



/*=============================================
FUNCIÓN GET UN USUARIO
=============================================*/

let mostrarUsuario = async (req, res)=>{


  try {
    const user = await Usuario.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}




/*=============================================
FUNCIÓN POST
=============================================*/

let crearUsuario = async (req, res) => {
  try {
    let { username, name, email, password, birthday, departament, position } = req.body;

   /* const emailExistente = await Usuario.findOne({ where: { email } });
    const usuarioExistente = await Usuario.findOne({ where: { username } });

  if (emailExistente) {
      return res.status(400).json({ mensaje: 'El correo electrónico ya está registrado' });
    }
   else if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El usuario ya está registrado' });
    }*/

    password="123456";
    const passwordEncriptada = await bcrypt.hash(password, 10);

    const usuario = await Usuario.create({
      username: 'ALVAROwkkk547',
      name: 'MARTINm',
      email: 'ALVARmw4@gmail.com',
      password: passwordEncriptada,
      birthday: '',
      departament: 'it',
      position: 'director'
    });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'error en la solicitud.'+error});
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