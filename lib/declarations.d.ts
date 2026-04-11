declare module '@drblaster/pipe' {
  export function pipe<T>(...fns: Array<(arg: T) => T>): (arg: T) => T;
}
