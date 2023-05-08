import { Container, Service } from "typedi";

import { ConfigReader, CodeConfig, CodeGenerator } from "../interfaces";
import { capitalize } from "../utils";

@Service()
export default class CodeGeneratorService implements CodeGenerator<string[]> {
  private configReader: ConfigReader<CodeConfig>;
  private generator: CodeGenerator;
  private config: CodeConfig;

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
