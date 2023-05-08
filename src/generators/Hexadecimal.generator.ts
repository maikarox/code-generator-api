import { v4 as uuidv4 } from 'uuid';

import { CodeGenerator } from '../interfaces';

export default class HexadecimalGenerator implements CodeGenerator {
  public generate(): string {
    return uuidv4(undefined, Buffer.alloc(16)).toString('hex').substring(0, 12)
  };
}
