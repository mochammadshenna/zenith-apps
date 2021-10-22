"use strict";
const { Model } = require("sequelize");
const { Sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }

  Profile.init(
    {
      shopName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Please be input Shop Name"
          }
        }
      },
      displayPicture: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Please input Display Picture"
          }
        }
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Please be input address"
          }
        }
      },
      phone: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Please input the phone number"
          }
        }
      },
      UserId: DataTypes.INTEGER,
      lat: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Please input Lat"
          }
        }
      },
      lng: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Please input lang"
          }
        }
      }
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
