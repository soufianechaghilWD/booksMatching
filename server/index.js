const mongoose = require('mongoose');
const app = require('./app');

const start = () => {
  console.log('App running on port 4000');
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.error('Could not connect to DB: ', err.message));
};

app.listen(4000, () => {
  start();
});
