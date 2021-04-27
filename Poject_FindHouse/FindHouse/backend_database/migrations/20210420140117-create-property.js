"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("properties", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING,
      },
      rooms: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      neighborhood: {
        type: Sequelize.STRING,
      },
      zip: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      areasize: {
        type: Sequelize.STRING,
      },
      areapreix: {
        type: Sequelize.STRING,
      },
      landarea: {
        type: Sequelize.STRING,
      },
      landareasizepostfix: {
        type: Sequelize.STRING,
      },
      badrooms: {
        type: Sequelize.STRING,
      },
      bathrooms: {
        type: Sequelize.STRING,
      },
      garages: {
        type: Sequelize.STRING,
      },
      garagessize: {
        type: Sequelize.STRING,
      },
      yearbuilt: {
        type: Sequelize.STRING,
      },
      vediourl: {
        type: Sequelize.STRING,
      },
      virtualtour: {
        type: Sequelize.STRING,
      },
      amenities: {
        type: Sequelize.STRING,
      },
      images: {
        type: Sequelize.STRING,
      },
      attchements: {
        type: Sequelize.STRING,
      },
      plandecripation: {
        type: Sequelize.STRING,
      },
      palnbathrooms: {
        type: Sequelize.STRING,
      },
      planbedrooms: {
        type: Sequelize.STRING,
      },
      planprice: {
        type: Sequelize.STRING,
      },
      planimage: {
        type: Sequelize.STRING,
      },
      plansize: {
        type: Sequelize.STRING,
      },
      pricepostfix: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("properties");
  },
};
