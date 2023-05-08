import Container, { Service } from "typedi";
import { CodeGenerator } from "../interfaces";

@Service()
export default class CodeService {
  private codeGenerator: CodeGenerator<string[]>;

  constructor() {
    this.codeGenerator = Container.get('CodeGeneratorService');
  }

  public async getCodes(): Promise<string[]> {
    return await this.codeGenerator.generate();
  }
}
