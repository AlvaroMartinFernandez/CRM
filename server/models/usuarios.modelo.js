/*=============================================
Importamos la instancia de Sequelize y la clase DataTypes
=============================================*/
const sequelize = require('../db/db');
const { DataTypes } = require('sequelize');


/*=============================================
ESQUEMA PARA EL MODELO CONECTOR A MYSQL SEQUALIZE
=============================================*/

let Usuario = sequelize.define('Usuario', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true
		}
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	birthday: {
		type: DataTypes.DATE,
		allowNull: false
	},
	departament: {
		type: DataTypes.STRING,
		allowNull: false
	},
	position: {
		type: DataTypes.STRING,
		allowNull: false
	},

},
	{ tableName: 'employees' },
	{
		/*=============================================
	Evitar devolver en la DATA el campo Password
	=============================================*/
		defaultScope: {
			attributes: { exclude: ['password'] }
		}
	});



/*=============================================
// Sincronizamos el modelo con la base de datos
=============================================*/
sequelize.sync();







/*=============================================
EXPORTAMOS EL MODELO
=============================================*/

module.exports = Usuario;