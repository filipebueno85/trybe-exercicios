const dificultyValidate = (req, res, next) => {
  const { difficulty } = req.body.description;
  const dificultyClass = ['Fácil', 'Médio', 'Difícil'];
  if (!dificultyClass.includes(difficulty)) {
    return res.status(400).json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' })
  }
  return next();
}

module.exports = dificultyValidate;
