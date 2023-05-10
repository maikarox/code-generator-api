import { TConfigReader, TCodeConfig } from '../../interfaces';

export default class RemoteConfiguration implements TConfigReader<TCodeConfig> {
  constructor() {}

  getConfig(): Promise<TCodeConfig> {
    // TODO: to be implemented.
    throw new Error('Method not implemented.');
  }
}
