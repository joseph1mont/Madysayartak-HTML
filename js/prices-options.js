function choice1() {
  document.getElementById("price_div1").style.display = "block";
  document.getElementById("price_div2").style.display = "none";
  document.getElementById("price_div3").style.display = "none";

  document.getElementById("first-choice").classList.add("active");
  document.getElementById("second-choice").classList.remove("active");
  document.getElementById("third-choice").classList.remove("active");
}

function choice2() {
  document.getElementById("price_div1").style.display = "none";
  document.getElementById("price_div2").style.display = "block";
  document.getElementById("price_div3").style.display = "none";

  document.getElementById("first-choice").classList.remove("active");
  document.getElementById("second-choice").classList.add("active");
  document.getElementById("third-choice").classList.remove("active");
}

function choice3() {
  document.getElementById("price_div1").style.display = "none";
  document.getElementById("price_div2").style.display = "none";
  document.getElementById("price_div3").style.display = "block";

  document.getElementById("first-choice").classList.remove("active");
  document.getElementById("second-choice").classList.remove("active");
  document.getElementById("third-choice").classList.add("active");
}
