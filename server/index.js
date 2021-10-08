const express = require('express');
const cors = require('cors');
const authRouter = require('./routers/auth');
// const carRouter = require('./routers/car');
// const boardRouter = require('./routers/board');
// const bookmarkRouter = require('./routers/bookmark');
const sequelize = require('./models').sequelize;
sequelize.sync();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);
// app.use('/car?brand=brand&?name=name', carRouter);
// app.use('/board', boardRouter);
// app.use('/bookmark', bookmarkRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(8080);
