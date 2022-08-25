
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
          "distance": 0
        },
        "push": {
          "particles_nb": 0
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
