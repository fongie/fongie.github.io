// script belonging to job slideshowF

var slideIndex = 2; // beh�ver tydligen en global f�r att r�kna vilken slide vi �r p�
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("job-container"); // h�mta bilderna, blir en array

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {	// g�m alla bilder
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";	// s�tter cssen till den sliden vi �r p� till visa som block, og�m dvs
}
