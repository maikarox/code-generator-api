import { Container, Service } from "typedi";

import { TConfigReader, TCodeConfig, TCodeGenerator } from "../interfaces";
import { capitalize } from "../utils";

@Service()
export default class CodeGeneratorService implements TCodeGenerator<string[]> {
  private configReader: TConfigReader<TCodeConfig>;
  private generator: TCodeGenerator;
  private config: TCodeConfig;

  constructor() {
    this.configReader = Container.get('ConfigReaderService');
    this.configReader.getConfig().then((configuration) => {
      this.config = configuration;
      this.generator = Container.get(`${capitalize(this.config.algorithm)}Generator`);
    });
  }

  public generate(): string[] {
    const codes = [];

    for (let i = 0; i < this.config.quantity; i++) {
      codes.push(this.generator.generate());
    };

    return codes;
  }
}
