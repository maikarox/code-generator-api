import { Router } from 'express';

import codes from './codes';

export default (): Router => {
  const app = Router();

  codes(app);

  return app;
};
