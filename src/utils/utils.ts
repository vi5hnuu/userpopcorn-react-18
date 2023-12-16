export const average = (arr: number[]) => arr.reduce((acc, cur, i, arr) => acc + cur, 0) / arr.length;
