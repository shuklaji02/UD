var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissor = document.querySelector(".scissor");
var comp = document.querySelector(".compim");
var user = document.querySelector(".userim");
var rText = document.querySelector(".Result");
let value = ["rock", "paper", "scissor"];

rock.addEventListener("click", function () {
  var comp_img = computerplay();
  change_img(comp_img, "rock");

  if (comp_img === "rock") {
    rText.innerHTML = "It's a Draw <br> try again";
  } else if (comp_img === "paper") {
    rText.innerHTML = "OOPSI ! Try Again";
  } else {
    rText.innerHTML = "You Won";
  }
});
paper.addEventListener("click", function () {
  var comp_img = computerplay();
  change_img(comp_img, "paper");

  if (comp_img === "rock") {
    rText.innerHTML = "You Won";
  } else if (comp_img === "paper") {
    rText.innerHTML = "It's a Draw <br> try again";
  } else {
    rText.innerHTML = "OOPSI ! Try Again";
  }
});
scissor.addEventListener("click", function () {
  var comp_img = computerplay();
  change_img(comp_img, "scissor");

  if (comp_img === "rock") {
    rText.innerHTML = "OOPSI ! Try Again";
  } else if (comp_img === "paper") {
    rText.innerHTML = "You Won";
  } else {
    rText.innerHTML = "It's a Draw <br> try again";
  }
});

computerplay = () => {
  return value[random()];
};
function random() {
  return Math.floor(Math.random() * 3);
}
function change_img(a, b) {
  comp.src = "img/" + a + ".png";
  user.src = "img/" + b + ".png";
}
