// src/app.js

const express = require('express');
const { validateTeam } = require('./middlewares/validateTeam');
const { existingId } = require('./middlewares/existingId');
const apiCredentials = require('./middlewares/apiCredentials');
// require('express-async-errors'); // não precisa definir uma variável
const morgan = require('morgan');
const cors = require('cors');
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.use(express.json());
app.use(apiCredentials); 
app.use(morgan('dev'));
app.use(express.static('./images'));
app.use(cors());
app.use(helmet());

// Configuramos um limitador para uma taxa máxima de 100 requisições em um intervalo de 15 minutos
const limiter = rateLimit({
  max: 100, // número máximo de requisições
  windowMs: 15 * 60 * 1000, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
  message: "Muitas requisições originadas desta IP" // mensagem personalizada quando atinge o limit rate
});

app.use(limiter);

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  // if (team) {
    res.json(team);
  // } else {
    // res.sendStatus(404);
  // }
});

// Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla'});
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});
// app.post('/teams',  existingId, validateTeam, (req, res) => {
//   const team = { id: nextId, ...req.body };
//   teams.push(team);
//   nextId += 1;
//   res.status(201).json(team);
// });

app.put('/teams/:id', validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

// app.post('/teams', (req, res) => {
//   const requiredProperties = ['nome', 'sigla'];
//   if (requiredProperties.every((property) => property in req.body)) {
//     const team = { id: nextId, ...req.body };
//     teams.push(team);
//     nextId += 1;
//     res.status(201).json(team);
//   } else {
//     res.sendStatus(400);
//   }
// });

// app.put('/teams/:id', (req, res) => {
//   const id = Number(req.params.id);
//   const requiredProperties = ['nome', 'sigla'];
//   const team = teams.find(t => t.id === id);
//   if (team && requiredProperties.every((property) => property in req.body)) {
//     const index = teams.indexOf(team);
//     const updated = { id, ...req.body };
//     teams.splice(index, 1, updated);
//     res.status(201).json(updated);
//   } else {
//     res.sendStatus(400);
//   }
// });

app.delete('/teams/:id',  existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});

// se ninguém respondeu, vai cair neste middleware
app.use((req, res) => res.sendStatus(404));

// module.exports = app;s

// // src/app.js
// const express = require('express');

// const app = express();

// app.use(express.json());

// const teams = [
//   {
//     id: 1,
//     name: 'São Paulo Futebol Clube',
//     initials: 'SPF',
//   },
//   {
//     id: 2,
//     name: 'Clube Atlético Mineiro',
//     initials: 'CAM',
//   },
// ];

// app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

// app.get('/teams', (req, res) => res.status(200).json({ teams }));

// app.post('/teams', (req, res) => {
//   const newTeam = { ...req.body };
//   teams.push(newTeam);

//   res.status(201).json({ team: newTeam });
// });

// app.put('/teams/:id', (req, res) => {
//   const { id } = req.params;
//   const { name, initials } = req.body;

//   const updateTeam = teams.find((team) => team.id === Number(id));

//   if (!updateTeam) {
//     res.status(404).json({ message: 'Team not found' });
//   }

//   updateTeam.name = name;
//   updateTeam.initials = initials;
//   res.status(200).json({ updateTeam });
// });

// app.get('/teams/:id', (req, res) => {
//   const team = teams.find(({ id }) => id === Number(req.params.id));
//   res.status(200).json(team);
// });

// app.delete('/teams/:id', (req, res) => {
//   const { id } = req.params;
//   const arrayPosition = teams.findIndex((team) => team.id === Number(id));
//   teams.splice(arrayPosition, 1);

//   res.status(200).end();
// });

// module.exports = app;
