const fruits: number[] = [200, 5, 2, 19];

const upperFruits = fruits.filter(isEven);

function isEven(num: number): boolean {
  return num % 2 === 0;
}
console.log(upperFruits);
