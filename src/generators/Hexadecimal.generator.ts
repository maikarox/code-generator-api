import { v4 as uuidv4 } from 'uuid';

import { ICodeGenerator, TGeneratorOptions } from '../interfaces';

export default class HexadecimalGenerator implements ICodeGenerator {
  public generate({ length }: TGeneratorOptions): string {
    return uuidv4(undefined, Buffer.alloc(16))
      .toString('hex')
      .substring(0, length);
  }
}
