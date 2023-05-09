import { Container, Service } from "typedi";

import { TConfigReader, TCodeConfig } from '../interfaces';
import { config } from '../configurations'
import { capitalize } from "../utils";

const { configReader: { configType } } = config;

@Service()
export default class CodeConfigReaderService implements TConfigReader<TCodeConfig> {
  private configuration: TConfigReader<TCodeConfig>;

  constructor() {
    this.configuration = Container.get(`${capitalize(configType)}Configuration`);
  }

  async getConfig(): Promise<TCodeConfig> {
    return await this.configuration.getConfig();
  }
}
