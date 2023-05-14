type TAlgorithm = 'sequential' | 'guid' | 'hexadecimal';

export interface ICodeConfig {
  quantity: number;
  algorithm: TAlgorithm;
  length?: number;
}
