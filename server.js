const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'janoibgoiuqbewgfbhqiuhbgiuhewrbgiuwebrgiuhberuivboiuqebgoiuqergf';

let nextId = 2;

let dumps = [
  {
    id: 0,
    content: 'I don\'t like the person in front of me.'
  },
  {
    id: 1,
    content: 'I wish I had a gun so I could shoot this guy\'s tire out!!!'
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'brellin' && password === 'doughnuts') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.get('/api/dumps', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(dumps);
  }, 1000);
});

app.get('/api/dumps/:id', authenticator, (req, res) => {
  const dump = dumps.find(f => f.id == req.params.id);

  if (dump) {
    res.status(200).json(dump);
  } else {
    res.status(404).send({ msg: 'dump not found' });
  }
});

app.post('/api/dumps', authenticator, (req, res) => {
  const dump = { id: getNextId(), ...req.body };

  dumps = [...dumps, dump];

  res.send(dumps);
});

app.put('/api/dumps/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const dumpIndex = dumps.findIndex(f => f.id == id);

  if (dumpIndex > -1) {
    const dump = { ...dumps[dumpIndex], ...req.body };

    dumps = [
      ...dumps.slice(0, dumpIndex),
      dump,
      ...dumps.slice(dumpIndex + 1)
    ];
    res.send(dumps);
  } else {
    res.status(404).send({ msg: 'dump not found' });
  }
});

app.delete('/api/dumps/:id', authenticator, (req, res) => {
  const { id } = req.params;

  dumps = dumps.filter(f => f.id !== Number(id));

  res.send(dumps);
});

function getNextId() {
  return nextId + 1;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
