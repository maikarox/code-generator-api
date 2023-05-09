import { Container } from 'typedi';

import GuidGenerator from '../generators/Guid.generator';
import HexadecimalGenerator from '../generators/Hexadecimal.generator';
import SequentialGenerator from '../generators/Sequential.generator';

export default () => {
  Container.set("GuidGenerator", new GuidGenerator());
  Container.set("HexadecimalGenerator", new HexadecimalGenerator());
  Container.set("SequentialGenerator", new SequentialGenerator());
};
