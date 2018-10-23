// Navbar collapse
function navbarCollapse() {
	var navbar = document.querySelector('.navbar');
	var header = document.querySelector('.header');
	
	var obj = header.getBoundingClientRect();
	  
  if (obj.top < -100) {
  	navbar.classList.add('navbar-shrink');
  } else {
  	navbar.classList.remove('navbar-shrink');
  }
}

navbarCollapse();
window.onscroll = navbarCollapse;

$(document).ready(function(){
  $("#mainNav").on("click","a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1100);
  });
});

//Navbar scrollspy
$('body').scrollspy({
  target: '#mainNav',
  offset: 57
});

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.sr-icon-1', {
  delay: 200,
  scale: 0
});

sr.reveal('.sr-icon-2', {
  delay: 400,
  scale: 0
});

sr.reveal('.sr-icon-3', {
  delay: 600,
  scale: 0
});

sr.reveal('.sr-icon-4', {
  delay: 800,
  scale: 0
});

sr.reveal('.sr-button', {
  delay: 200,
  distance: '15px',
  origin: 'bottom',
  scale: 0.8
});

sr.reveal('.sr-contact-1', {
  delay: 200,
  scale: 0
});

sr.reveal('.sr-contact-2', {
  delay: 400,
  scale: 0
});

// Magnific popup
$('.popup-gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Загрузка...',
  closeOnContentClick: true,
  image: {
    verticalFit: false
  },
  gallery: {
    enabled: true
  }
});


