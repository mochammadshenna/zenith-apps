const { User, Profile, Category, Product } = require("../models/index");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const session = require("express-session");

class Controller {
  // HOME PAGE
  static home(req, res) {

    let reqQuery = req.query.search
    let data = {}
    if (reqQuery) {
      data.where = {
        productName: { [Op.iLike]: `%${reqQuery}%` }
      }
    }
    Product.findAll(data)
      .then((dataProduct) => {
        data.product = dataProduct
        return Profile.findAll()
      })
      .then((dataProfile) => {
        data.profile = dataProfile
        res.render("home", { data, fomatCurrency });
      })
      .catch((error) => {
        res.send(error);
      });
  }
  //LOGIN PAGE
  static getLoginPage(req, res) {
    res.render("login.ejs");
  }

  static postLoginPage(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((data) => {
        let msg = "Email / Password SALAH!"
        if (!data) {
          res.render("login.ejs", { msg });
        } else {
          const password = bcrypt.compareSync(req.body.password, data.password); // true
          console.log(password, '>>bcrypt')
          if (password) {
            data.getProfile()
              .then((profile) => {
                req.session.sessionData = {
                  isLogin: true,
                  id: data.id,
                  shopName: profile.shopName,
                  username: data.username,
                  email: data.email,
                  displayPicture: profile.displayPicture,
                  address: profile.address,
                  phone: profile.phone,
                  lat: profile.lat,
                  lng: profile.lng,
                }
                // console.log("masuk sini");
                res.redirect(`/products/${data.id}`)
              })
          } else {
            res.render("login.ejs", { msg });
          }
        }
      })
      .catch((err) => {
        res.send(err)
      });
  }

  static getLogOut(req, res) {
    req.session.destroy()
    res.redirect('/')
  }

  // ADD USER

  static getRegister(req, res) {
    res.render("registerForm");
  }

  static postRegister(req, res) {
    let { username, password, email, shopName, displayPicture, address, phone, lat, lng } = req.body;
    User.create({ email, password, username })
      .then((data) => {
        let UserId = data.id
        return Profile.create({ shopName, displayPicture, address, phone, UserId, lat, lng })
      })
      .then(() => {
        let successRegister = "Registrasi Berhasil, silahkan Log In"
        res.render("login", { successRegister })
      })
      .catch((err) => {
        let dataErr = err.errors.map(el => {
          return `<p>${el.message}</p>`
        })
        res.send(dataErr.join(" "))
      })
  }

  static productList(req, res) {
    Product.findAll({
      where: {
        UserId: req.params.id,
      },
    })
      .then((data) => {

        res.render("products", { data }); // page habis login //
      })
      .catch((error) => {
        res.send(error);
      });
  }

  // PRODUCT

  static productAddForm(req, res) {
    Category.findAll()
      .then((data) => {
        res.render("productAddForm", { data });
      })
      .catch((error) => {
        res.send(error);
      });
  }

  static productAddPost(req, res) {
    let UserId = req.params.UserId
    let { productName, imageUrl, description, price, stock, CategoryId } =
      req.body;
    Product.create(
      { productName, imageUrl, description, price, stock, CategoryId, UserId },
      {
        where: {
          id: req.params.UserId,
        },
      }
    )
      .then(() => {
        res.redirect(`/products/${UserId}`);
      })
      .catch((error) => {
        let dataErr = error.errors.map(el => {
          return `<p>${el.message}</p>`
        })
        res.send(dataErr.join(" "))
      });
  }

  static productEditForm(req, res) {
    let data = {}
    Product.findOne({
      where: {
        id: req.params.id,
      }
    })
      .then((dataProduct) => {
        data.dataProduct = dataProduct
        return Category.findAll()
      })
      .then((dataCategory) => {
        data.dataCategory = dataCategory
        res.render("productEditForm", { data });
      })
      .catch((error) => {
        res.send(error);
      });
  }

  static productEditPost(req, res) {
    let UserId = req.params.UserId
    let { productName, imageUrl, description, price, stock, CategoryId } =
      req.body;
    Product.update(
      { productName, imageUrl, description, price, stock, CategoryId },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then((data) => {
        console.log(data)
        res.redirect(`/products/${UserId}`);
      })
      .catch((error) => {
        let dataErr = error.errors.map(el => {
          return `<p>${el.message}</p>`
        })
        res.send(dataErr.join(" "))
      });
  }

  static deleteProduct(req, res) {
    Product.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.redirect(`/products/${req.params.UserId}`))
      .catch((err) => res.send(err))
  }

  // PROFILES
  static profileEditForm(req, res) {
    res.render('profileEditForm')
  }

  static profileEditPost(req, res) {
    let UserId = req.params.UserId
    let { shopName, displayPicture, address, phone, lat, lng } = req.body;
    Profile.update(
      { shopName, displayPicture, address, phone, lat, lng }, {
      where: { id: UserId }
    }
    )
      .then(() => {
        res.redirect(`/products/${UserId}`)
      })
      .catch((err) => {
        let dataErr = err.errors.map(el => {
          return `<p>${el.message}</p>`
        })
        res.send(dataErr.join(" "))
      });
  }
}

module.exports = Controller;
