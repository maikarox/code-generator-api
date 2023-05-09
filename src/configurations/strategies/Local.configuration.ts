import fs from 'fs';

import { TConfigReader, TCodeConfig } from "../../interfaces";

export default class LocalConfiguration implements TConfigReader<TCodeConfig> {
  private readonly fileName: string;

  constructor(){
    this.fileName = process.env.LOCAL_CONFIG_FILE;
  }

  async getConfig(): Promise<TCodeConfig> {
    try {
      const config = await fs.promises.readFile(this.fileName, 'utf-8');
      return JSON.parse(config);
    } catch (error) {
      throw `Error reading configuration: ${error}`;
    }
  }
}
