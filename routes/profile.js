const express = require("express");
const route = express.Router();
const Controller = require("../controllers/controller");

// PROFILE PAGE
route.get("/:UserId/edit", Controller.profileEditForm); // dari /:id ada button edit
route.post("/:UserId/edit", Controller.profileEditPost);


module.exports = route;