import { ICodeConfig } from './codeConfig.interface';

export type TGeneratorOptions = Pick<ICodeConfig, 'length'>;

export interface ICodeGenerator<TReturnType = string> {
  generate: (options?: TGeneratorOptions) => TReturnType;
}
