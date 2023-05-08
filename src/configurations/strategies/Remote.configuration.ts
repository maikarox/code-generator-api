import { ConfigReader, CodeConfig } from "../../interfaces";

export default class RemoteConfiguration implements ConfigReader<CodeConfig> {
  constructor(){}

  getConfig(): Promise<CodeConfig> {
    // TODO: to be implemented.
    throw new Error('Method not implemented.');
  }
}
