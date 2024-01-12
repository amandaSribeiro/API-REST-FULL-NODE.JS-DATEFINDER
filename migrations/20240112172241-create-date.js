'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      custo: {
        type: Sequelize.CHAR
      },
      encontro_duplo: {
        type: Sequelize.CHAR
      },
      em_casa: {
        type: Sequelize.CHAR
      },
      agendamento: {
        type: Sequelize.CHAR
      },
      descricao: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Dates');
  }
};