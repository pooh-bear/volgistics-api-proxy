import 'dotenv/config';
import express from 'express';
import scheduleRouter from './schedule';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/schedule', scheduleRouter);

app.get('/', (_, res) => {
  res.send({
    up: true,
    orgId: process.env.ORG_ID
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
