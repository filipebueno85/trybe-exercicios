// src/app.js

const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();
app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacauTrybe.getFilterCocolateByname(name);
  if (!chocolates.length) res.status(404).json([]);
  res.status(200).json(chocolates);
  // res.status(chocolates.length === 0 ? 404 : 200)
  // .json(chocolates);
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const chocolates = await cacauTrybe.updateCacauTrybeFile(Number(id), {name, brandId});
  // if (!chocolates) return res.status(404).json({ message: 'chocolate not found' });
  // return res.status(200).json({ chocolates: chocolates });
  if (chocolates) return res.status(200).json({ chocolate: chocolates});
  res.status(404).json({ message: 'chocolate not found' });
})


module.exports = app;

// const express = require('express');
// const readJsonData = require('./readJsonData');

// const app = express();

// app.use(express.json());

// app.get('/chocolates', async (req, res) => {
//   const chocolates = await readJsonData('./src/chocolates.json');
//   res.status(200).json(chocolates);
// });

// app.get('/chocolates/:id', async (req, res) => {
//   const { id } = req.params;
//   const chocolates = await readJsonData('./src/chocolates.json');
//   const foundchoc = chocolates.find((choc) => choc.id === Number(id));
//   if (!foundchoc) {
//     return res.status(404).json({ message: 'chocolate nao encontrado' });
//   }
//   res.status(200).json(foundchoc);
// });

// app.get('/chocolates/brand/:brandId', async (req, res) => {
//   const { brandId } = req.params;
//   const chocolates = await readJsonData('./src/chocolates.json');
//   const foundchoc = chocolates.filter((choc) => choc.brandId=== Number(brandId));
//   if (!foundchoc) {
//     return res.status(404).json({ message: 'chocolate nao encontrado' });
//   }
//   res.status(200).json(foundchoc);
// });


// module.exports = app;