require('dotenv').config();
const express = require('express');
const app = express();
const usersRouter = require('./routes/users');

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // for demo only
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api/users', usersRouter);

app.get('/', (req, res) => res.send('API is running. Check /api/users'));

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
