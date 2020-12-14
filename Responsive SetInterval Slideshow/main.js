var divStart = document.querySelector("button.start");
var slideContainer = document.querySelector("section.slideshow-container");
var slides = document.getElementsByClassName("myslides");

var slideIndex = 0;
var slideTotal = slides.length; 

var interval = 200; // speed of interval
var myTimer;

showSlides(slideIndex);


// Show slideShow on click div.start
// Start myTimer when div.start is clicked
divStart.addEventListener("click", function () {
  slideContainer.classList.add("show");
  
  slideIndex = 0 - 1;
  next();
  myTimer = setInterval(next, interval);
});

// when clicking on slideshow. hide by removing class show
// stop myTimer until button div.start is clicked again.
slideContainer.addEventListener("click", function () {
  slideContainer.classList.remove("show");
  
  clearInterval(myTimer);
});


// Adding Image
var next = function () {
  if( slideIndex < slideTotal - 1 ) {
    slideIndex = slideIndex + 1;    
  } else {
    slideIndex = 0;
  }
				  
  showSlides();
};

// setInterval(next, interval);

function showSlides() {        
  for( i=0; i<slideTotal; i++) { 
    
    // show & hide image
    if (i==slideIndex) {
      slides[i].classList.add("visible");
    } else {
      slides[i].classList.remove("visible");  
    }
  }
}
