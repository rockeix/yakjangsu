const findPwButton = document.getElementById("findPw");
const findIdButton = document.getElementById("findId");
const container = document.getElementById("container");

findPwButton.addEventListener("click", () => {
   container.classList.add("right-panel-active");
});

findIdButton.addEventListener("click", () => {
   container.classList.remove("right-panel-active");
});

export default findjs