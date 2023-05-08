import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { getCodes } from '../../controllers/code.controller';

export default (app: Router): void => {
  app.get(
    '/',
    asyncHandler(getCodes),
  );
};
