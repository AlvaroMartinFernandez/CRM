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
FUNCIÓN LOGIN
=============================================*/

let login = async (req, res)=>{

	//Obtenemos el cuerpo del formulario del formulario

	let body = req.body;

	//Recorremos la base de datos en búsqueda de coincidencia con el usuario
  try {
    // Busca al usuario en la base de datos por el nombre de usuario
    const user = await Usuario.findOne({ where: { username:body.username} });

    console.log(user);
    const pass = bcrypt.hash(user.password, 10);
    console.log(pass);

    // Si no se encuentra el usuario, retorna un error
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
        }
        console.log(res);

    // Verifica la contraseña
    if( !bcrypt.compareSync(body.password, user.password)){

			return res.json({

				status: 400,
				mensaje:"La contraseña es incorrecta"
				
			})	

		}
    //Generamos el token de autorizacíón

		let token  = jwt.sign({

			data:user

		}, process.env.SECRET, { expiresIn: process.env.CADUCIDAD })

		res.json({

			status:200,
			token,
			data:user
		})
     console.log(token);

  } catch (error) {
    // En caso de algún error, retorna un error genérico
    return res.status(500).json({ message: 'Error en el servidor' });
  }
	};

/*=============================================
EXPORTAMOS LAS FUNCIONES DEL CONTROLADOR
=============================================*/

module.exports = {

	mostrarUsuarios,
	crearUsuario, 
  login
}