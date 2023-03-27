// Destructuring Exercises:

// Object Destructuring 1:

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets);
will print 8
// console.log(yearNeptuneDiscovered);
will print 1846

// Object Destructuring 2:

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659,
// };

//let { numPlanets, ...discoveryYears } = planetFacts;

//console.log(discoveryYears);
will print {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Array Destructuring 1:
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];

// console.log(first);
will print Maya
// console.log(second);
will print Marisa
// console.log(third);
will print Chi

// Array Destructuring 2:
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]

//   console.log(raindrops);
will print Raindrops on roses
//   console.log(whiskers);
will print whiskers on kittens
//   console.log(aFewOfMyFavoriteThings);
["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// Array Destructuring 3:
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];

// console.log(numbers);
will print [10, 30, 20]

// ES2015 Refactoring:

// ES5 Original:
// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };

//  var a = obj.numbers.a;
//   var b = obj.numbers.b;

// Original refactored for ES2015:

const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const { a, b } = obj.numbers;

// ES5 Array Swap:
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// Array Swap Refactored:
[arr[0], arr[1]] = [arr[1], arr[0]];

// raceResults():

// const names = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre'];

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});
