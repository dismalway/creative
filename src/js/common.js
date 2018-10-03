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
