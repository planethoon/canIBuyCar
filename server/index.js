const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./routers/auth');
const carRouter = require('./routers/car');
// const boardRouter = require('./routers/board');
const bookmarkRouter = require('./routers/bookmark');
const sequelize = require('./models').sequelize;
sequelize.sync();


app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);
app.use('/car', carRouter);
// app.use('/board', boardRouter);
app.use('/bookmark', bookmarkRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(8080);

