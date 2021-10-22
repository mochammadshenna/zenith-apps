"use strict";
const bcrypt = require('bcryptjs')


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "thriftshop",
          password: bcrypt.hashSync('12345', 10),
          email: "thriftshop123@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "lunac",
          password: bcrypt.hashSync('12345', 10),
          email: "lunah@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "bobabu",
          password: bcrypt.hashSync('12345', 10),
          email: "bobabu@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
