import { v4 as uuidv4 } from 'uuid';

import { ICodeGenerator } from '../interfaces/codeGenerator.interface';

export default class GuidGenerator implements ICodeGenerator {
  generate(): string {
    return uuidv4();
  }
}
