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
	var x = document.getElementById("myAudio"); 
	function playAudio() { 
		x.play(); 
	}
  var y = document.getElementById("myMus"); 
  function myMusPlayAudio() { 
    y.play(); 
  }
  function myMusPauseAudio() {
    y.pause();
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

var instance = M.Carousel.init({
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
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, 1);
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
        "value": 134,
        "density": {
          "enable": true,
          "value_area": 700
        }
      },
      "color": {
        "value": "#66ffcc"
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
        "value": 16,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 65,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ccccff",
        "opacity": 0.9,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 15,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1100
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
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 138
        },
        "push": {
          "particles_nb": 40
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

  