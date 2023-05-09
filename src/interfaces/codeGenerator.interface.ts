export interface TCodeGenerator<TReturnType = string> {
  generate: () => TReturnType;
}
