import Container, { Service } from 'typedi';
import { ICode, ICodeGenerator } from '../interfaces';

@Service()
export default class CodeService implements ICode {
  private codeGenerator: ICodeGenerator<string[]>;

  constructor() {
    this.codeGenerator = Container.get('CodeGeneratorService');
  }

  public async getCodes(): Promise<string[]> {
    return await this.codeGenerator.generate();
  }
}
