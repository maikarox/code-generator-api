import { Container } from 'typedi';

import LocalConfiguration from '../configurations/strategies/Local.configuration';
import RemoteConfiguration from '../configurations/strategies/Remote.configuration';

export default () => {
  Container.set('LocalConfiguration', new LocalConfiguration());
  Container.set('RemoteConfiguration', new RemoteConfiguration());
};
