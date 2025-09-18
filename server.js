const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

// Use your middleware
app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Hello, middleware is working!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
