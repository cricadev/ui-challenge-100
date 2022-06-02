const viewPass = document.querySelectorAll("#viewPass");
const passInput = document.querySelectorAll("#password");
const statsPass = document.querySelector("#stats");
const securityText = document.querySelector("#securityText");

let isVisible = true;
viewPass.forEach(function(img){
  img.addEventListener("click", function(e) {
    e.target.classList.toggle("active")
    e.target.classList.contains("active")
    ? isVisible = false
    : isVisible = true;
  } 
)});
passInput.forEach(function(input){
  input.addEventListener("mousemove", function(e) {
    if(isVisible === false){
      e.target.type = "text";
    }
    else{
      e.target.type = "password";
    }
  })
})
passInput.forEach(function(input){
  input.addEventListener("keydown", function(e) {
    const regexAll = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const value = e.target.value;
    const length = e.target.value.length 

    if(length >= 0){
      statsPass.classList.remove("highSec");
      statsPass.classList.remove("medSec");
      statsPass.classList.add("lowSec");
      securityText.textContent = "low";
    }
    if(length >= 5 &&  /\d/.test(value) ){
      statsPass.classList.remove("lowSec");
      statsPass.classList.remove("highSec");
      statsPass.classList.add("medSec");
      securityText.textContent = "medium";
    }
    if(length >= 10 && regexAll.test(value) ) {
      statsPass.classList.remove("lowSec");
      statsPass.classList.remove("medSec");
      statsPass.classList.add("highSec");
      securityText.textContent = "high";
    }
  })});