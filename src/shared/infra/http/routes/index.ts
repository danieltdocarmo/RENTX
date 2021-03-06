import {Router} from 'express';
import '../../../container';

import { categoriesRouter } from './categories.routes';
import { specificationRouter } from './specifications.routes';
import { usersRoutes } from './users.routes';
import { authenticationsRoutes } from './authentication.routes'; 
import { carsRoutes } from './cars.routes';

const rentalxRoutes = Router();

rentalxRoutes.use('/specifications', specificationRouter);
rentalxRoutes.use('/categories', categoriesRouter);
rentalxRoutes.use('/users', usersRoutes);
rentalxRoutes.use('/cars', carsRoutes);
rentalxRoutes.use('/rentals', rentalxRoutes);
rentalxRoutes.use(authenticationsRoutes);

export { rentalxRoutes };