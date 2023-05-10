import { Container } from 'typedi';

import CodeService from '../services/Code.service';
import CodeConfigReaderService from '../services/CodeConfigReader.service';
import CodeGeneratorService from '../services/CodeGenerator.service';

export default () => {
  Container.set('ConfigReaderService', new CodeConfigReaderService());
  Container.set('CodeGeneratorService', new CodeGeneratorService());
  Container.set('CodeService', new CodeService());
};
