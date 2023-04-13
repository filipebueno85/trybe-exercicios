const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (!teams.some((team) => team.id === id)) {
    res.sendStatus(404).json({ message: 'Time não encontrado' });
  } else {
    next();
  }
}


// const existingId = (req, res, next) => {
//   const id = Number(req.params.id);
//   if (teams.some((team) => team.id === id )){
//     next();
//   } else {
//    res.sendStatus(404).json({message: 'id inexistente, insira um id valido!'});
//   }
// }

module.exports = existingId;
