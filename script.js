const loadData = (data) => {
  const result = fetch("https://jsonplaceholder.typicode.com/todos/1")
    //promise of response
    .then((response) => response.json())
    //promise of json data
    .then((data) => console.log(data));
};

// const loadPost = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       displayPost(data);
//     });
// };

// const displayPost = (posts) => {
//   posts.forEach((posts) => {
//     console.log(posts);
//   });
// };

// console.log("js connected");

// const person = {
//   name: "Arif Hossain",
//   age: 28,
//   sex: "Male",
//   eduacation: "MBA",
//   occupation: "Unemployed",
//   friends: ["Rony", "Rafel", "Hossain", "Habib", "Rubel", "Shamim", "Shumon"],
//   isRich: false,
//   money: 10000,
// };

// console.log(typeof person, person);

// // JSON --> JS Object with Notation
// // JSON.stringify --> Object to JSON
// // JSON.Parse --> JSON to Object

// const personJSON = JSON.stringify(person);
// console.log(typeof personJSON, personJSON);

// const jsonParse = JSON.parse(personJSON);
// console.log(typeof jsonParse, jsonParse);
