// Display navigation when menu button is clicked
const menuButton = document.querySelector('.nav-menu');
menuButton.addEventListener('click', function () {
    var menuList = document.querySelector('nav ul');
    if (menuList.style.display === "block") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "block";
    }
});


//making nav links active on click
const navElems = document.querySelectorAll('nav ul li');
// Remove 'active' class from other navigation elements when one is clicked
navElems.forEach(function (navElem) {
    navElem.addEventListener('mouseover', function () {
        navElems.forEach(function (navElem) {
            navElem.classList.remove('active')
        })
// Add 'active' class to navigation elements when they are clicked
        this.classList.add('active');
        navElems.forEach(function (navElem) {
            if (!navElem.classList.contains('active')) {
                navElem.style.opacity = '1'
            }
        })
    })

    navElem.addEventListener('mouseout', function () {
        navElems.forEach(function (navElem) {
            navElem.style.opacity = '1';
        })
    })
})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("expanded");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("collapsed");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = 80%vh;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
console.log()

