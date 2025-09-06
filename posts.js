const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPost(data));

  const displayPost = (posts) => {
    // get the container
    const postContainer = document.getElementById("post-container");

    posts.forEach((post) => {
      // create an element
      const li = document.createElement("li");
      li.innerText = post.title;
      postContainer.appendChild(li);
    });
  };
};
