import { Container, Service } from 'typedi';

import { IConfigReader, ICodeConfig } from '../interfaces';
import { config } from '../configurations';
import { capitalize } from '../utils';

const {
  configReader: { configType },
} = config;

@Service()
export default class CodeConfigReaderService
  implements IConfigReader<ICodeConfig>
{
  private configuration: IConfigReader<ICodeConfig>;

  constructor() {
    this.configuration = Container.get(
      `${capitalize(configType)}Configuration`,
    );
  }

  async getConfig(): Promise<ICodeConfig> {
    return await this.configuration.getConfig();
  }
}
