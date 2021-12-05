import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

const PORT = 5000;

app.use(morgan());
app.use(helmet());


app.get("/", (req, res) => {
  res.status(200).json({ message: "hello from the server"});
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})