console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

// Exercise:
// Use document.createElement() and append another social media post to the body.
const article = document.createElement("article");
article.classList.add("post");

const paragraph = document.createElement("p");
paragraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
paragraph.classList.add("post__content");

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = "@username";

const button = document.createElement("button");
button.classList.add("post__button");
button.setAttribute("data-js", "like-button");
button.textContent = " ♥ Like";

footer.append(span, button);
article.append(paragraph, footer);
document.body.append(article);

const likeButtons = document.querySelectorAll('[data-js="like-button"]');

for (let likeButton of likeButtons) {
  likeButton.addEventListener("click", handleLikeButtonClick);
}
