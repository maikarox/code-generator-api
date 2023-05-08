import { Container } from 'typedi';

import LocalConfiguration from '../configurations/strategies/Local.configuration';
import RemoteConfiguration from '../configurations/strategies/Remote.configuration';
import CodeService from '../services/Code.service';
import CodeConfigReaderService from '../services/CodeConfigReader.service';
import CodeGeneratorService from '../services/CodeGenerator.service';
import GuidGenerator from '../generators/Guid.generator';
import HexadecimalGenerator from '../generators/Hexadecimal.generator';
import SequentialGenerator from '../generators/Sequential.generator';

export default  () => {
  Container.set("LocalConfiguration", new LocalConfiguration());
  Container.set("RemoteConfiguration", new RemoteConfiguration());
  Container.set("GuidGenerator", new GuidGenerator());
  Container.set("HexadecimalGenerator", new HexadecimalGenerator());
  Container.set("SequentialGenerator", new SequentialGenerator());
  Container.set("ConfigReaderService", new CodeConfigReaderService());
  Container.set("CodeGeneratorService", new CodeGeneratorService());
  Container.set("CodeService", new CodeService());
};
