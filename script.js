console.log("js connected");

const person = {
  name: "Arif Hossain",
  age: 28,
  sex: "Male",
  eduacation: "MBA",
  occupation: "Unemployed",
  friends: ["Rony", "Rafel", "Hossain", "Habib", "Rubel", "Shamim", "Shumon"],
  isRich: false,
  money: 10000,
};

console.log(typeof person, person);

// JSON --> JS Object with Notation
// JSON.stringify --> Object to JSON
// JSON.Parse --> JSON to Object

const personJSON = JSON.stringify(person);
console.log(typeof personJSON, personJSON);

const jsonParse = JSON.parse(personJSON);
console.log(typeof jsonParse, jsonParse);
