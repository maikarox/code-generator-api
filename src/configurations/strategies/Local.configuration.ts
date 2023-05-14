import fs from 'fs';

import { IConfigReader, ICodeConfig } from '../../interfaces';

export default class LocalConfiguration implements IConfigReader<ICodeConfig> {
  private readonly fileName: string;

  constructor() {
    this.fileName = process.env.LOCAL_CONFIG_FILE;
  }

  async getConfig(): Promise<ICodeConfig> {
    try {
      const config = await fs.promises.readFile(this.fileName, 'utf-8');
      return JSON.parse(config);
    } catch (error) {
      throw `Error reading configuration: ${error}`;
    }
  }
}
