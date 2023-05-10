export interface TConfigReader<TConfig> {
  getConfig(): Promise<TConfig>;
}
