import { IConfigReader, ICodeConfig } from '../../interfaces';

export default class RemoteConfiguration implements IConfigReader<ICodeConfig> {
  constructor() {}

  getConfig(): Promise<ICodeConfig> {
    // TODO: to be implemented.
    throw new Error('Method not implemented.');
  }
}
