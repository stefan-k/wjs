// var myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!";

var myImage = document.querySelector("img");

myImage.onclick = function() {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mantis.jpg") {
    myImage.setAttribute("src", "images/mantis2.jpg");
  } else {
    myImage.setAttribute("src", "images/mantis.jpg");
  }
};
