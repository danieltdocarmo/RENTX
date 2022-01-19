import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { rentalxRoutes } from './routes';
import swaggerFile from '../src/swaager.json';
import './database';

const app = express();


app.listen(3333, () => {
    console.log('Server is running on port 3333');
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());

app.use(rentalxRoutes);