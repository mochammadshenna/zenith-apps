const express = require("express");
const route = express.Router();
const Controller = require("../controllers/controller");
const routeProfile = require("./profile")
const routeProducts = require("./product")
const isLoginMiddleware = require("../MiddSess/isLoginMidleware");


route.get("/login", Controller.getLoginPage); //
route.post("/login", Controller.postLoginPage); //
route.get("/logout", Controller.getLogOut); //

route.get("/add-user", Controller.getRegister); // add user (form)
route.post("/add-user", Controller.postRegister); // add user (form)

route.use(isLoginMiddleware);

route.get("/", Controller.home); // landing page
route.use("/products", routeProducts);
route.use("/profiles", routeProfile)

module.exports = route;
