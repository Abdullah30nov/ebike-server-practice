const express = require('express');
const sequelize = require('./config/db.config');
const user_Routes = require('./routes/user.route');
const main_forums_Routes = require('./routes/new-forum-main-category.route');
const view_count_Routes = require('./routes/forum-view-count.route');
const categ_detail_Routes = require('./routes/category-detail.route');
const categ_detail_view_count_Routes = require('./routes/category-detail-view-count.route');

const app = express();
const PORT = process.env.PORT || 9302;

app.use(express.json());

app.use('/', user_Routes);
app.use('/', main_forums_Routes);
app.use('/', view_count_Routes);
app.use('/', categ_detail_Routes);
app.use('/', categ_detail_view_count_Routes);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

  
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    // res.send('Hello Server is Start')
  });
});