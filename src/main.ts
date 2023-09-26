const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers);

const words = ["Hello", "World", "JavaScript", "TypeScript", "Programming"];

const filteredWords = words.filter((word) => word.length > 5);

console.log(filteredWords);

const numbers1 = [1, 2, 3, 4, 5];

const sum = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum);

const numbers2 = [5, 8, 15, 3, 2];

const hasNumberGreaterThanTen = numbers2.some((num) => num > 10);

console.log(hasNumberGreaterThanTen);