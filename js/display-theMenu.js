var mybutton = document.getElementByClassName("madySayartak");
window.onscroll = function() {
  scrollFunction()
};

var displayMenuButtom = 25;

function scrollFunction() {
  if (document.body.scrollTop > displayMenuButtom || document.documentElement.scrollTop > displayMenuButtom) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
