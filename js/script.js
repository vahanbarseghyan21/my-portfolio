	function openNav() {
		document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
		document.body.style.backgroundColor = "rgba(0,0,0,0.4)";		   
	}

	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("main").style.marginLeft= "0";
		document.body.style.backgroundColor = "black";
	}
	let x = document.getElementById("myAudio"); 
	function playAudio() { 
		x.play(); 
	}
  let y = document.getElementById("myMus"); 
  function myMusPlayAudio() { 
    y.play(); 
  }
  function myMusPauseAudio() {
    y.pause();
  }


  window.onload = function() {
    const getfullyear = document.querySelector('#getfullyear')
    const today = new Date();
    const year = today.getFullYear();
    getfullyear.innerHTML = year;
  }


/**
 * jQuery my img zoom
 */

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

/**
 * Full Width Slider
 */

let instance = M.Carousel.init({
    fullWidth: true
  });

  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });

/**
 * about parallax
 */
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.parallax');
    let instances = M.Parallax.init(elems, 1);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });

