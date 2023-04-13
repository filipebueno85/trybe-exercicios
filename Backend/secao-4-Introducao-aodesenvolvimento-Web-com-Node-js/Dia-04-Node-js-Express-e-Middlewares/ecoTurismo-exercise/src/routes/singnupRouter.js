const express = require('express');
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  const signupArray = [email, password, firstName, phone];
  // (undefined in signupArray) if (singupArray.includes(undefined))
  // console.log(signupArray.includes(undefined));
  // console.log((undefined in signupArray));

  if (signupArray.includes(undefined)) {
    return res.status(401).json({ message: "Campos ausentes!" });
  };

  const token = generateToken();
  return res.status(200).json(token);
});

module.exports = router;
