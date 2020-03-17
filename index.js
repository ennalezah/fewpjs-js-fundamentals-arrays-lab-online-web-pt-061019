// Write your solution here!

const pets = ["Milo", "Otis", "Garfield"]
const append = pets.slice(), prepend = pets.slice(), removeLast = pets.slice(), removeFirst = pets.slice()

append.push("Odie");

prepend.unshift("Odie");

removeLast.pop();

removeFirst.shift();