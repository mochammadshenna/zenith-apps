const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const route = require("./routes/index");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/helper"));

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
    })
);


app.use(route);

app.listen(port, () => console.log(`App running.. port: ${port}`));
