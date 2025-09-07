const data = async () => {
  const loadData = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("Hello");
  const response = await loadData.json();
  console.log(response);
  console.log(true);
};

data();
