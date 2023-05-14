import { ICodeGenerator, TGeneratorOptions } from '../interfaces';

export default class SecuentialGenerator implements ICodeGenerator {
  private currentCode: number;

  constructor() {
    this.currentCode = 0;
  }

  public generate({ length }: TGeneratorOptions): string {
    const code = this.pad(this.currentCode, length);
    this.currentCode++;

    return code;
  }

  private pad(num: number, size: number): string {
    let s = String(num);
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }
}
