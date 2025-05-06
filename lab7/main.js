// main.js
const express = require("express");
const path = require("path");
const layouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();
const subscribersController = require("./controllers/subscriberController");

// Paramètres
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

// Middlewares de base
app.use(layouts);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Sessions & flash
app.use(session({
  secret: "secret_ai_academy", // Change ce secret pour la prod
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

// Variables globales pour toutes les vues
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

// ROUTES
app.get("/", (req, res) => {
  res.render("index", { pageTitle: "Accueil" });
});

app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);
app.get("/subscribers", subscribersController.getAllSubscribers);

// ERREUR 404
app.use((req, res) => {
  res.status(404);
  res.render("404", { pageTitle: "Page non trouvée" });
});

// Lancer le serveur
app.listen(app.get("port"), () => {
  console.log(`Le serveur tourne sur le port ${app.get("port")}`);
});
