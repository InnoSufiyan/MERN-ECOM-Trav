const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  // console.log(email, password)

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or Password");
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // console.log(email, password)

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already Exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
      res.status(400)
      throw new Error('Invalid')
  }
});

module.exports = router;
