const express = require('express');
const sequelize = require('./config/db.config');
const userRoutes = require('./routes/user.route');
const mainForumsRoutes = require('./routes/new-forum-main-category.route');
const ViewCountRoutes = require('./routes/forum-view-count.route');

const app = express();
const PORT = process.env.PORT || 9302;

app.use(express.json());

app.use('/', userRoutes);
app.use('/', mainForumsRoutes);
app.use('/', ViewCountRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    // res.send('Hello Server is Start')
  });
});