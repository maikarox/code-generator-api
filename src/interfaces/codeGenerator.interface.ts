import { TCodeConfig } from './codeConfig.interface';

export type TGeneratorOptions = Pick<TCodeConfig, 'length'>;

export interface TCodeGenerator<TReturnType = string> {
  generate: (options?: TGeneratorOptions) => TReturnType;
}
