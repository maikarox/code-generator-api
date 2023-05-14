import { Container, Service } from 'typedi';

import { IConfigReader, ICodeConfig, ICodeGenerator } from '../interfaces';
import { capitalize } from '../utils';

@Service()
export default class CodeGeneratorService
  implements ICodeGenerator<Promise<string[]>>
{
  private configReader: IConfigReader<ICodeConfig>;
  private generator: ICodeGenerator;
  private config: ICodeConfig;

  constructor() {
    this.configReader = Container.get('ConfigReaderService');
    this.initializeConfig();
  }

  private async initializeConfig() {
    this.config = await this.configReader.getConfig();
    this.generator = Container.get(
      `${capitalize(this.config.algorithm)}Generator`,
    );
  }

  public async generate(): Promise<string[]> {
    const { length } = this.config;
    const codes = [];

    for (let i = 0; i < this.config.quantity; i++) {
      codes.push(this.generator.generate({ length }));
    }

    return codes;
  }
}
