'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * static method searching
     */
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey: 'CategoryId' })
      Product.belongsTo(models.User, { foreignKey: 'UserId' })
    }


    isPremium() {  //getter mutator
      if (this.price > 1000000) {
        return `(PREMIUM) ${this.productName}`
      } else {
        return this.productName
      }
    }
  };

  Product.init({
    productName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Please input productName"
        }
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Please input image url"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Please input product description"
        }
      }
    },
    price: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Please input price product"
        }
      }
    },
    stock: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Please input stock"
        }
      }
    },
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};