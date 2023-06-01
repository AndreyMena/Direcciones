'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Adresses.init({
    Nombre: DataTypes.STRING,
    Apellidos: DataTypes.STRING,
    TelCasa: DataTypes.STRING,
    DireccionCasa: DataTypes.STRING,
    TelTrabajo: DataTypes.STRING,
    DireccionTrabajo: DataTypes.STRING,
    Correo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Adresses',
  });
  return Adresses;
};