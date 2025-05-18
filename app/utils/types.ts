export type Prettify<T> = {
  [K in keyof T]: T[K];
  /* We need this intersection to actually achieve the effect we want for Prettify */
  /* eslint-disable-next-line */
} & {};
