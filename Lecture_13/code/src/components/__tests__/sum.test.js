import { sum } from "../sum.js";

test("Sum function should calculate the sum of two numbers ", () => {
  const result = sum(3, 5);
  expect(result).toBe(8);
});
