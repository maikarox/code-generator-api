import Container, { Service } from 'typedi';
import { ICode, TCodeGenerator } from '../interfaces';

@Service()
export default class CodeService implements ICode {
  private codeGenerator: TCodeGenerator<string[]>;

  constructor() {
    this.codeGenerator = Container.get('CodeGeneratorService');
  }

  public async getCodes(): Promise<string[]> {
    return await this.codeGenerator.generate();
  }
}
