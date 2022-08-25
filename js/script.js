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


  /**
   * particles
   */
  
 particlesJS('particles',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 600
        }
      },
      "color": {
        "value": "#00e1f0"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 25,
          "height": 25
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 40,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 70,
          "size_min": 20,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 0,
        "color": "#ccccff",
        "opacity": 0,
        "width": 0
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 60
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 4,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 4,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 130
        },
        "push": {
          "particles_nb": 40
        },
        "remove": {
          "particles_nb": 20
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#0d125c",
      "background_image": "",
      "background_position": "0% 0%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

  // console.log(document.querySelector('canvas').prototype);


// console.log(year);