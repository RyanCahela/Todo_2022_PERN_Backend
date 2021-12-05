import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = 5000;

app.use(morgan());
app.use(helmet());


app.get("/", (req, res) => {
  res.status(200).send("hello from the server");
});

app.get("/grade", (req, res) => {
  const { mark } = req.query;
  res.status(200).json({ "message": `The value of mark is ${mark}`});
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})