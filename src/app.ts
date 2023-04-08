import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/taskRoutes';
import { handleApplicationErrors } from './middlewares/errorMiddleware';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router)
app.use(handleApplicationErrors)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port ${port}.`));
