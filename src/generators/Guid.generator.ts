import { v4 as uuidv4 } from 'uuid';

import { CodeGenerator } from '../interfaces/code-generator.interface';

export default class GuidGenerator implements CodeGenerator {
  generate(): string {
    return uuidv4();
  }
}
