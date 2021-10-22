"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          productName: "Spongebob Crewneck",
          imageUrl: "shorturl.at/npHLN",
          description: "bahan premium, adem",
          price: 100000,
          stock: 50,
          CategoryId: 1,
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Oversized tee black",
          imageUrl: "shorturl.at/lyM19",
          description: "trendy and stylish",
          price: 150000,
          stock: 30,
          CategoryId: 1,
          UserId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productName: "Sneakers air jor",
          imageUrl: "shorturl.at/etK89",
          description: "size: US 9",
          price: 3000000,
          stock: 4,
          CategoryId: 5,
          UserId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
