"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Profiles",
      [
        {
          shopName: "Thrift Rawamangun",
          displayPicture: "shorturl.at/zEIK5",
          address: "-",
          phone: 8124433455,
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          shopName: "Luna tbk",
          displayPicture: "shorturl.at/zEIK5",
          address: "-",
          phone: 8900442234,
          UserId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          shopName: "Bobabu",
          displayPicture: "shorturl.at/zEIK5",
          address: "-",
          phone: 81244335566,
          UserId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Profiles", null, {});
  },
};
