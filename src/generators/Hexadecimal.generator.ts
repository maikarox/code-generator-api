import { v4 as uuidv4 } from 'uuid';

import { TCodeGenerator } from '../interfaces';

export default class HexadecimalGenerator implements TCodeGenerator {
  public generate(): string {
    return uuidv4(undefined, Buffer.alloc(16)).toString('hex').substring(0, 12)
  };
}
