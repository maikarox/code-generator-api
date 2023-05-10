import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { errorHandler } from '../middlewares';
import routes from '../routes';

export default (app: Application): void => {
  app.use(helmet());
  app.enable('trust proxy');
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use('/api', routes());
  app.use(errorHandler);
};
