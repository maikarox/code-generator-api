import { ICodeGenerator, TGeneratorOptions } from '../interfaces';

export default class SecuentialGenerator implements ICodeGenerator {
  private currentCode: number;

  constructor() {
    this.currentCode = 0;
  }

  public generate({ length }: TGeneratorOptions): string {
    const code = String(this.currentCode).padStart(length, '0');
    this.currentCode++;

    return code;
  }
}
