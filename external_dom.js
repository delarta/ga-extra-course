let description = document.getElementById("desc");
let buttonTitle = document.getElementById("btn");
let h1 = document.getElementsByTagName("h1")[0];

let button = document.querySelector("#btn-hide");
let buttonDesc = document.querySelector("#btn-desc");

let about = document.querySelector(".about");
let descriptions = document.querySelectorAll(".description");

button.addEventListener("click", function () {
  if(about.style.display === "none"){
    about.style.display = "block";
  }else{
    about.style.display = "none"
  }
});

buttonDesc.addEventListener("click", function () {
  for (let i = 0; i < descriptions.length; i++) {
    descriptions[i].style.backgroundColor = "crimson";
  }
});

buttonTitle.addEventListener("click", function () {
  h1.style.backgroundColor = "green";
});

description.innerHTML = "Hey Tayo";
