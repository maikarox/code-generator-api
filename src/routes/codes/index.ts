import { Router } from 'express';

import getCodes from './codes.get';

const route = Router();

export default (app: Router): void => {
  app.use('/codes', route);

  getCodes(route);
};
