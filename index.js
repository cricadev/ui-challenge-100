const signBtn = document.querySelector("#signForm");

function clickHandler(e){
  e.preventDefault();
  console.log(e.target);
  e.target.classList.add("active");
}
signBtn.addEventListener("click", clickHandler);
console.log(signBtn);