export interface ConfigReader<TConfig>{
  getConfig(): Promise<TConfig>;
}