export interface CodeGenerator<TReturnType = string> {
  generate: () => TReturnType;
}
