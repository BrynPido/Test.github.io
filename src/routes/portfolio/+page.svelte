<script>

import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';



let currentIndex = 0;
let images = [
  { src: '/pic1.png', caption: 'This is a poster that I worked on' },
  { src: '/pic2.png', caption: 'Image Gallery Project' },
  { src: '/pic4.png', caption: 'An Activity in Networking' },
  { src: '/pic5.png', caption: 'Working on an Employee Management System in Java' },
  { src: '/pic6.png', caption: 'An Activity in Business Analytics' }
];

function next() {
  currentIndex = (currentIndex + 1) % images.length;
}

function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
}
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Roboto:wght@400;700&display=swap');

   
    .welcome-container {
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100vh;
     background: linear-gradient(135deg, #303233, #282c31);
     color: white;
     transition: background 0.3s ease;
     font-family: 'Poppins', sans-serif;
     position: relative;
   }

  

    .container {
  top: 20px;
  max-width: 1200px;
  margin: 20px auto;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgb(236, 235, 235);
  position: relative;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out, transform 0.4s; /* Added transform transition for hover effect */
  animation: ultraCoolFadeIn 1s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Apply the ultraCoolFadeIn animation */
}

.dark .container {
  background: linear-gradient(135deg, rgba(50, 50, 50, 0.8), rgba(40, 40, 40, 0.8));
  box-shadow: 0 12px 24px rgba(255, 255, 255, 0.4); /* White shadow for dark mode */
}

/* Add hover effect */
.container:hover {
  transform: scale(1.05); /* Scale up the container slightly */
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
}

    .carousel {
      max-width: 100%;
      margin: 0 auto;
      overflow: hidden;
      
     

    }
  
    .carousel-image {
  width: 100%;
  height: 600px;
  background-size: contain; /* Preserve the original image size and aspect ratio */
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 1s ease-in-out;
}
  
    .carousel-caption {
      margin-top: 10px;
      
      font-size: 22px;
      font-weight: bold;
      text-align: center;
      
      padding: 15px 25px;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgb(236, 235, 235);
    }
  
    .dark .carousel-caption {
      background: rgba(30, 30, 30, 0.8);
      color: white;
    }
  
    .carousel-controls {
      position: absolute;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      transform: translateY(-50%);
    }
  
    .button {
      background-color: rgba(0, 0, 0, 0.6);
      color: #fff;
      padding: 20px;
      border: none;
      cursor: pointer;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s, transform 0.2s;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  
    .button.left {
      left: 10px; /* Positioned inside the container */
    }
  
    .button.right {
      right: 10px; /* Positioned inside the container */
    }
  
    .button:hover {
      background-color: rgba(0, 0, 0, 0.85);
      transform: scale(1.15);
    }
  
   
    @media screen and (max-width: 768px) {
  .container {
    padding: 20px;
  }

  .carousel-image {
    height: auto;
    max-height: 300px;
    background-size: contain; /* Make sure the image remains responsive on smaller screens */
  }

  .button {
    width: 50px;
    height: 50px;
  }

  .button.left {
    left: 10px;
  }

  .button.right {
    right: 10px;
  }
}
@keyframes ultraCoolFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.9) rotateY(-90deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1) rotateY(0);
  }
}

:global(.nav-item) {
  color:#ffffff8c;
  opacity: 1;
  display: inline-block;
  padding: 10px 15px;
  position: relative;
  animation: ultraCoolFadeIn 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transition: color 0.4s ease, transform 0.4s ease, text-shadow 0.4s ease;
}

:global(.nav-item:hover) {
  color: #1e90ff;
  transform: translateY(-5px) scale(1.15) rotateX(10deg) rotateZ(3deg);
  text-shadow: 0 0 8px rgba(30, 144, 255, 0.75), 0 0 15px rgba(30, 144, 255, 0.5);
}

:global(.nav-item::after) {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #1e90ff, #00ffea);
  bottom: 0;
  left: 0;
  transition: width 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

:global(.nav-item:hover::after) {
  width: 100%;
}

@keyframes neonGlow {
  0% {
    text-shadow: 0 0 8px rgba(30, 144, 255, 0.5), 0 0 15px rgba(30, 144, 255, 0.2);
  }
  50% {
    text-shadow: 0 0 12px rgba(30, 144, 255, 1), 0 0 20px rgba(30, 144, 255, 0.8);
  }
  100% {
    text-shadow: 0 0 8px rgba(30, 144, 255, 0.5), 0 0 15px rgba(30, 144, 255, 0.2);
  }
}

/* Apply neon glow effect to active link */
:global(.nav-item.active) {
  animation: neonGlow 2s infinite alternate;
}

  </style>
<div class="relative px-8">
  <Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b bg-gray-800 text-white">
    
      <NavHamburger />
      <NavUl>
        <!-- Apply the nav-item class to NavLi for animation -->
        <NavLi class="nav-item" href="/" active={true}>Home</NavLi>
        <NavLi class="nav-item" href="/portfolio">Portfolio</NavLi>
        <NavLi class="nav-item" href="/about">About</NavLi>
        <NavLi class="nav-item" href="/contact">Contact</NavLi>
      </NavUl>
    </Navbar>
   
  </div>
  <div class="welcome-container">
    
    <div class="container bg-gray-800 text-white">
      <div class="carousel  bg-gray-800 text-white">
        <div
          class="carousel-image  bg-gray-800 text-white"
          style="background-image: url({images[currentIndex].src})"
        ></div>
      </div>
  
      <div class="carousel-caption  bg-gray-800 text-white">
        {images[currentIndex].caption}
      </div>
  
      <!-- Buttons placed inside the container but outside the carousel -->
      <button class="button left" on:click={prev} aria-label="Previous image">‹</button>
      <button class="button right" on:click={next} aria-label="Next image">›</button>
    </div>
  
    <!-- Switch moved outside the container -->
   
  </div>
  