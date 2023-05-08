type Algorithm = 'sequential' | 'guid' | 'hexadecimal';

export interface CodeConfig {
  quantity: number;
  algorithm: Algorithm;
}
