const express = require('express');
const dificultyValidate = require('../middlewares/dificultyValidate');
const ratingValidate = require('../middlewares/ratingValidate');
const createdAtValidate = require('../middlewares/createdAtValidate');
const descriptionValidate = require('../middlewares/descriptionValidate');
const priceValidate = require('../middlewares/priceValidade');
const nameValidate = require('../middlewares/nameValidate');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/',
auth, 
dificultyValidate, 
ratingValidate,
createdAtValidate,
descriptionValidate,
priceValidate, 
nameValidate, 
(_req, res) => {
  return res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
});

module.exports = router;
