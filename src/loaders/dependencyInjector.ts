import services from './services';
import configurations from './configurations';
import generators from './generators';

export default () => {
  configurations();
  generators();
  services();
};
