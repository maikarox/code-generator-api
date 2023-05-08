import 'reflect-metadata';
import express from 'express';

import loaders from './loaders';
import { config } from './configurations';

const { port } = config;

const start = async () => {
  const app = express();

  loaders({ expressApp: app });

  app.listen(port || '8081', () => {
    console.log(`Listening on port ${port || '8081'}`);
  });
};

start();