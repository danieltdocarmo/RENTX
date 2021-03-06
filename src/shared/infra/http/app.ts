import 'express-async-errors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import createConnection from '../typeorm'
import swaggerFile from '../../../swaager.json';
import { rentalxRoutes } from './routes';
import err from './middlewares/err';

const app = express();

createConnection();

app.use(express.json());

app.use(rentalxRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(err);

export { app }
