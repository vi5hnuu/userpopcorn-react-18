export const average = (arr: number[]) =>
  arr.length === 0 ? 0 : arr.reduce((acc, cur, i, arr) => acc + cur, 0) / arr.length;
