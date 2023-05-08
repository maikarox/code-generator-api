import { Container, Service } from "typedi";

import { ConfigReader, CodeConfig } from '../interfaces';
import { config } from '../configurations'
import { capitalize } from "../utils";

const { configReader: { configType } } = config;

@Service()
export default class CodeConfigReaderService implements ConfigReader<CodeConfig> {
  private configuration: ConfigReader<CodeConfig>;

  constructor() {
    this.configuration = Container.get(`${capitalize(configType)}Configuration`);
  }

  async getConfig(): Promise<CodeConfig> {
    return await this.configuration.getConfig();
  }
}
