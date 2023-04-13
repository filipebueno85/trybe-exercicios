const descriptionValidate = (descriptionValue, res, value) => {
    if (descriptionValue == undefined) {
      return res.status(400).json(
        { message: `O campo ${value} é obrigatório` },
      );
    }
  };
  
  module.exports = (req, res, next) => {
    
    const { description } = req.body;
  
    return descriptionValidate(description, res, 'description')
      || descriptionValidate(description.createdAt, res, 'createdAt')
      || descriptionValidate(description.rating, res, 'rating')
      || descriptionValidate(description.difficulty, res, 'difficulty')
      || next();
  
};

// module.exports = descriptionValidate;

// const { description } = req.body;
  //   if (description === undefined) {
  //     return res.status(400).json({ message: 'O campo description é obrigatório' })
  //   };
  //   if (description.createAt === undefined) {
  //     return res.status(400).json({ message: 'O campo createdAt é obrigatório' });
  //   }
  //   if (description.rating === undefined) {
  //     return res.status(400).json({ message: 'O campo rating é obrigatório' });
  //   }
  //   if (description.difficulty === undefined) {
  //     return res.status(400).json({ message: 'O campo difficulty é obrigatório' })
  //   }
    
  //   return next();
