// Question 4
function sumInteriorAngles(N) {
  const sum = (N - 2) * 180;
  return sum;
}
const N = 6; // A hexagon has 6 sides
const sum = sumInteriorAngles(N);
console.log(
  `The sum of interior angles of a ${N}-sided polygon is ${sum} degrees.`
);
