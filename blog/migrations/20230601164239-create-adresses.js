'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Adresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nombre: {
        type: Sequelize.STRING
      },
      Apellidos: {
        type: Sequelize.STRING
      },
      TelCasa: {
        type: Sequelize.STRING
      },
      DireccionCasa: {
        type: Sequelize.STRING
      },
      TelTrabajo: {
        type: Sequelize.STRING
      },
      DireccionTrabajo: {
        type: Sequelize.STRING
      },
      Correo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Adresses');
  }
};