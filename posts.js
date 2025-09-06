const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPost(data));
};

const displayPost = (posts) => {
  //1. get the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    //2. create an element
    const postCard = document.createElement("div");
    postCard.innerHTML = `
    <div class="post-card">
        <h3>${post.title}{</h3>
        <p>
          ${post.body}
        </p>
      </div>
    
    `;

    //3. add to the container (appendChild)
    postContainer.appendChild(postCard);
  });
};

loadPost();
