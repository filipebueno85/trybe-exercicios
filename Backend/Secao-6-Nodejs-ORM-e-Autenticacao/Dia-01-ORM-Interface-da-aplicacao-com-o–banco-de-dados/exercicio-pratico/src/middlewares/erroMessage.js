const erroMessage = (req, res, next) => {
  const { id } = req.params;

  if (id === undefined) return res.status(500).json({ message: 'Ops! Algo deu Errado1' });

  return next();
}

module.exports = erroMessage;
