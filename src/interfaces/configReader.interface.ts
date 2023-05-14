export interface IConfigReader<TConfig> {
  getConfig(): Promise<TConfig>;
}
