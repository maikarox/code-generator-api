import { CodeGenerator } from '../interfaces';

export default class SecuentialGenerator implements CodeGenerator {
  private currentCode: number;

  constructor() {
    this.currentCode = 0;
  }

  public generate(): string {
    const code = this.pad(this.currentCode, 6);
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
