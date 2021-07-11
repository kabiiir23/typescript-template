console.log(`
▀█▀ █▄█ █▀█ █▀▀ █▀ █▀▀ █▀█ █ █▀█ ▀█▀
░█░ ░█░ █▀▀ ██▄ ▄█ █▄▄ █▀▄ █ █▀▀ ░█░
`);

type getSumParams = {
  x: number;
  y: number;
};

/**
 * A sample function that returns the sum of two numbers.
 *
 * ### Example
 * ```typescript
 * console.log(getSum({ x:1, y:3 }))
 * // => 4
 * ```
 *
 * @returns number
 */
export const getSum = ({ x, y }: { x: number; y: number }): number => {
  return x + y;
};

const sum = getSum({ x: 1, y: 4 });
// const sum = getSum({ x: 3, y: 9 });
console.log(sum);
