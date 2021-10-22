"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Profile, { foreignKey: "UserId" });
      User.hasMany(models.Product, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Username Harus Diisi!"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Password Harus Diisi!"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: "Format email tidak valid!"
          }
        }
      },
    },
    {
      hooks: {
        beforeCreate: (instance, method) => {
          instance.password = bcrypt.hashSync(instance.password, 10)
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
