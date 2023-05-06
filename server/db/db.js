/*=============================================
CONEXIÓN A LA BASE DE DATOS
=============================================*/
const  Sequelize  = require('sequelize');
const sequelize = new Sequelize('CRM', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
  });

  sequelize.authenticate().then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((error) => {
    console.error('Error al conectarse a la base de datos:', error);
  });

module.exports = sequelize;
