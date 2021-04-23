/**************************
 *
 * THIS IS A TESTING FILE
 *
 * DO NOT MODIFY THIS FILE
 *
 ***************************/

import main from "./functions";

const params = [
  ["Laila", 3, 9, 1],
  ["Taiba", 8, 10, 10],
  ["Nation", 9, 448758328540529, 99],
];

const oddsSmallerThanResults = [4, 5, 224379164270264];
const squareOrDoubleResults = [1, 20, 9801];

test("main function", () => {
  const spy = jest.spyOn(console, "log");

  params.forEach((group, index) => {
    const results = main(group[0], group[1], group[2], group[3]);

    // greet
    expect(spy).toHaveBeenCalledWith(`Hello ${group[0]}`);

    // isOdd
    expect(results[0]).toBe(group[1] % 2 !== 0);

    // oddsSmallerThan
    expect(results[1]).toBe(oddsSmallerThanResults[index]);

    // squareOrDouble
    expect(results[2]).toBe(squareOrDoubleResults[index]);
  });
});
