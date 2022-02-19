let arr = [];
const content = document.querySelector(".content");
function createPost(title, body) {
  if (title === "" || body === "") {
    window.alert("Must not leave post title or body empty.");
    return;
  }
  populateStorage;

  const postContainer = document.createElement("div");
  const postTitle = document.createElement("div");
  const postBody = document.createElement("div");

  postTitle.textContent = title;
  postBody.textContent = body;
  postContainer.classList.add("sample-post");
  postTitle.classList.add("sample-post-title");
  postBody.classList.add("sample-post-body");

  const removePostBtn = document.createElement("button");
  removePostBtn.textContent = "x";
  removePostBtn.classList.add("remove-post-btn");

  removePostBtn.onclick = () => {
    content.removeChild(postContainer);
  };

  postContainer.appendChild(removePostBtn);

  arr.push((title, body));
  postContainer.appendChild(postTitle);
  postContainer.appendChild(postBody);
  content.appendChild(postContainer);
}
function loadCreatePostBtn() {
  const createPostBtn = document.querySelector(".create-post-btn");

  createPostBtn.onclick = () =>
    createPost(
      document.getElementById("title-form").value,
      document.getElementById("body-form").value
    );
}

function loadPage() {
  loadCreatePostBtn();
}
loadPage();

function setPosts() {
  let posts = localStorage.getItem("posts");
  for (let i = 0; i < posts.length; i += 1) {
    createPost(posts[i], posts[i]);
    console.log(posts[i]);
  }
}
function populateStorage() {
  localStorage.setItem("posts", arr);
  setPosts();
}
if (!localStorage.getItem("posts")) {
  populateStorage();
} else {
  setPosts();
}
