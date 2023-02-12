const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 4000;

const start = () => {
  console.log(`App running on port ${PORT}`);
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.error('Could not connect to DB: ', err.message));
};

app.listen(PORT, () => {
  start();
});
