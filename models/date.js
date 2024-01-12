'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Date extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Date.init({
    titulo: DataTypes.STRING,
    endereco: DataTypes.STRING,
    custo: DataTypes.CHAR,
    encontro_duplo: DataTypes.CHAR,
    em_casa: DataTypes.CHAR,
    agendamento: DataTypes.CHAR,
    descricao: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Date',
  });
  return Date;
};