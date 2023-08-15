const express = require("express");
const router = express.Router();

//connectivity
require("../db/conn");
const User = require("../model/userSchema");

router.post('/contact', async (req, res) => {
  const { firstname, lastname, phonenumber, email, address, message } = req.body;

  if (!firstname || !lastname || !phonenumber || !email || !address) {
    return res.status(422).json({ error: "Fill All fields" });
  }
  try {
    const data = new User({
      firstname, lastname, phonenumber, email, address, message });

    await data.save();
    res.status(201).json({ message: "Data Entered" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
