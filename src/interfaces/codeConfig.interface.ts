type TAlgorithm = 'sequential' | 'guid' | 'hexadecimal';

export interface TCodeConfig {
  quantity: number;
  algorithm: TAlgorithm;
}
