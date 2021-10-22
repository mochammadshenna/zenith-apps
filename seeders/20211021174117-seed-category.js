"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Batu Hijau",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Batu Hijau3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Batu Hijau3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Batu Hijau4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Batu Hijau5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
