window.onscroll = function() {myStickyFunction()};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myStickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}