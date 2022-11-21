import express from "express";
import session from "express-session";

const router = express.Router();
// session middleware
const secret = Math.random().toString(36).substring(2, 15);
router.use(
  session({
    secret,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

router.get("/", (req, res) => {
  // check if user is logged in
  if (req.session.user) {
    res.render("home", { user: req.session.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/login", (req, res) => {
  // check if user is logged in
  if (req.session.user) {
    res.redirect("/");
  } else {
    res.render("login");
  }
});
router.get("/register", (req, res) => {
  // check if session exists
  if (req.session.user) {
    // redirect to login
    res.redirect("/login");
  } else {
    res.render("register");
  }
});
router.post("/loginApi", express.json({ type: "*/*" }), (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // console.log(username, password);
  // check if username and password are matched with session
  if (req.session.user) {
    if (
      req.session.user.username == username &&
      req.session.user.password == password
    ) {
      res.send("success");
    } else {
      res.send("Invalid username or password");
    }
  } else {
    res.send("Invalid username or password");
  }
});
router.post("/registerApi", express.json({ type: "*/*" }), (req, res) => {
  // set session
  req.session.user = req.body;
  res.send("success");
});
router.get("/logout", (req, res) => {
  // destroy session
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/login");
    }
  });
});

export default router;
