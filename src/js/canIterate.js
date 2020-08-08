/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
export default function canIterate(item) {
  try {
    for (const i of item) {
    }
    return true;
  } catch (err) {
    return false;
  }
}

// для отладки в консоле
const x = canIterate({ a: 1, b: 2 });
console.log(x);
