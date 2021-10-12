const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routers/auth");
const carRouter = require("./routers/car");
const boardRouter = require("./routers/board");
const bookmarkRouter = require("./routers/bookmark");
const commentRouter = require("./routers/comment");
const sequelize = require("./models").sequelize;
sequelize.sync();

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  method: "*",
  allowedHeaders: ["Content-type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/auth", authRouter);
app.use("/car", carRouter);
app.use("/board", boardRouter);
app.use("/bookmark", bookmarkRouter);
app.use("/comment", commentRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});

app.listen(80)
