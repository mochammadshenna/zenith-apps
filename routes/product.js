const express = require("express");
const route = express.Router();
const Controller = require("../controllers/controller");

route.get("/:id", Controller.productList); // product page (habis login)
route.get("/:UserId/add", Controller.productAddForm); // dari button add product
route.post("/:UserId/add", Controller.productAddPost);
route.get("/:UserId/edit/:id", Controller.productEditForm); // dari button edit product
route.post("/:UserId/edit/:id", Controller.productEditPost);
route.get("/:UserId/delete/:id", Controller.deleteProduct); // dari button delete product by id

module.exports = route