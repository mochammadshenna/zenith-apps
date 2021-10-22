"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await [
      queryInterface.addColumn("Profiles", "lat", { type: Sequelize.STRING }),
      queryInterface.addColumn("Profiles", "lng", { type: Sequelize.STRING }),
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return await [
      queryInterface.removeColumn("Profiles", "lat", {
        type: Sequelize.STRING,
      }),
      queryInterface.removeColumn("Profiles", "lng", {
        type: Sequelize.STRING,
      }),
    ];
  },
};
