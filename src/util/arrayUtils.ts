export const chunkArray = <T>(array: T[], size: number): T[][] => {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
};

export const splitArrayIntoN = <T>(array: T[], n: number): T[][] => {
  const result: T[][] = [];
  const chunkSize = Math.ceil(array.length / n);

  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
};

export const createMatrix = <T>(
  array: T[],
  rows: number,
  cols: number
): T[][] => {
  const result: T[][] = [];

  for (let i = 0; i < rows; i++) {
    const row: T[] = [];
    for (let j = 0; j < cols; j++) {
      const index = i * cols + j;
      if (index < array.length) {
        row.push(array[index]);
      }
    }
    result.push(row);
  }

  return result;
};
