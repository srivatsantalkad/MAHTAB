function loadCreatePostBtn() {
  const content = document.querySelector(".content");

  const createPostBtn = document.querySelector(".create-post-btn");

  createPostBtn.onclick = () => {
    const postContainer = document.createElement("div");
    const postTitle = document.createElement("div");
    const postBody = document.createElement("div");

    postContainer.classList.add("sample-post");
    postTitle.classList.add("sample-post-title");
    postBody.classList.add("sample-post-body");
    postTitle.textContent = document.getElementById("title-form").value;
    postBody.textContent = document.getElementById("body-form").value;
    if (postTitle.textContent === "" || postBody.textContent === "") {
      window.alert("Must not leave post title or body empty.");
      return;
    }
    postContainer.appendChild(postTitle);
    postContainer.appendChild(postBody);
    content.appendChild(postContainer);
  };
}
function loadPage() {
  loadCreatePostBtn();
}
loadPage();
