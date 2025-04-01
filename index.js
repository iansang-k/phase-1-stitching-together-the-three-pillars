/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {};
// Step 1: Select the heart elements
const articleHearts = document.querySelectorAll(".like-glyph");
// Step 2: Mock server communication
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success!");
    }, 300);
  });
}
// Step 3: Add event listeners
articleHearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        heart.classList.toggle("activated-heart");
      })
      .catch((error) => {
        alert("Server error. Please try again.");
      });
  });
});
