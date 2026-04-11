declare module 'runes' {
  export function substr(str: string, start: number, length: number): string;
}

declare module '@drblaster/pipe' {
  export function pipe<T>(...fns: Array<(arg: T) => T>): (arg: T) => T;
}
