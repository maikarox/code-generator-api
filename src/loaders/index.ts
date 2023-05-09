import { Application } from 'express';

import expressLoader from './express';
import dependencyInjector from './dependencyInjector';

export default ({ expressApp }: { expressApp: Application }) => {
  expressLoader(expressApp);
  dependencyInjector();
};
