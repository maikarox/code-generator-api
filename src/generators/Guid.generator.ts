import { v4 as uuidv4 } from 'uuid';

import { TCodeGenerator } from '../interfaces/codeGenerator.interface';

export default class GuidGenerator implements TCodeGenerator {
  generate(): string {
    return uuidv4();
  }
}
