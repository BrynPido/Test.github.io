<script>
  import { GradientButton } from 'flowbite-svelte';
    import { fade, fly } from 'svelte/transition'; // Import Svelte transitions
  import { Card, Button, Toggle } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, ImagePlaceholder, Skeleton, TextPlaceholder } from 'flowbite-svelte';
  let showCard = false;
  let showGmailCard = false; // Control Instagram card visibility
  let showGithubCard = false; // Control Twitter card visibility

  

  const toggleCard = () => {
    showCard = !showCard; // Toggle Facebook card visibility
  };

  const toggleGmailCard = () => {
    showGmailCard = !showGmailCard; // Toggle Instagram card visibility
  };

  const toggleGithubCard = () => {
    showGithubCard = !showGithubCard; // Toggle Twitter card visibility
  };
let vCard = false;
</script>
<style>
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Roboto:wght@400;700&display=swap');
    .welcome-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      transition: background 0.3s ease;
      font-family: 'Poppins', sans-serif;
      position: relative;
      background: linear-gradient(135deg, #303233, #282c31);
    }
   
    .toggle-btn { 
      
      margin-right:1000px;
    margin-top: -520px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background 0.3s;
    position:absolute;

  }
  .toggle-btn2 {
      margin-right:100px;
    margin-top: -520px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background 0.3s;
    position:absolute;

  }
  .toggle-btn3 {
      margin-right:-800px;
    margin-top: -520px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background 0.3s;
    position:absolute;

  }
  .toggle-btn, .toggle-btn2, .toggle-btn3 {
    opacity: 0; /* Ensure it starts hidden */
    animation: ultraCoolFadeIn 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards; /* Animation forwards to persist final state */
    transition: transform 0.4s ease, text-shadow 0.4s ease;
  }

  .toggle-btn:hover, .toggle-btn2:hover, .toggle-btn3:hover {
    transform: translateY(-5px) scale(1.15) rotateX(10deg) rotateZ(3deg);
    text-shadow: 0 0 8px rgba(30, 144, 255, 0.75), 0 0 15px rgba(30, 144, 255, 0.5);
  }
  .card-container {
    position: absolute;
    width: 300px;
    height: 300px;
    margin-right: 1000px;
    margin-bottom:100px; /* Adds spacing between the button and card */
  }
  .card-container2 {
    position: absolute;
    width: 300px;
    height: 300px;
    margin-right: 100px;
    margin-bottom:100px; /* Adds spacing between the button and card */
  }
  .card-container3 {
    position: absolute;
    width: 300px;
    height: 300px;
    margin-right: -800px;
    margin-bottom:100px; /* Adds spacing between the button and card */
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
  <div class="welcome-container" >
 

  <!-- Facebook Button -->
  <div class="toggle-btn">
    <GradientButton outline color="purpleToBlue" on:click={toggleCard} style="width:295px;">
      Facebook
    </GradientButton>
  </div>

  <!-- Gmail Button -->
  <div class="toggle-btn2" >
    <GradientButton outline color="pinkToOrange" on:click={toggleGmailCard} style="width:295px;">
      Gmail
    </GradientButton>
  </div>

  <!-- Github Button -->
  <div class="toggle-btn3" >
    <GradientButton outline color="cyanToBlue" on:click={toggleGithubCard} style="width:295px;">
      Github
    </GradientButton>
  </div>

  <!-- Facebook Card -->
  {#if showCard}
    <div transition:fly="{{ y: -20, duration: 300 }}" class="card-container">
      <Card img="/facebook.png" href="https://www.facebook.com/jaaqt" target="_blank" class="bg-gray-800 text-white">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Facebook
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
          Facebook Account
        </p>
      </Card>
    </div>
  {/if}

  <!-- Gmail Card -->
  {#if showGmailCard}
    <div transition:fly="{{ y: -20, duration: 300 }}" class="card-container2">
      <Card img="/gmail.png" href="https://mail.google.com/mail/?view=cm&fs=1&to=fontelerajohnadrian@gmail.com
" target="_blank" class="bg-gray-800 text-white">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Gmail
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
          Compose an Email to My Gmail Address
        </p>
      </Card>
    </div>
  {/if}

  <!-- Twitter Card -->
  {#if showGithubCard}
    <div transition:fly="{{ y: -20, duration: 300 }}" class="card-container3">
      <Card img="/github.png" href="https://github.com/j3yey" target="_blank" class="bg-gray-800 text-white">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Github
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
          Github Profile
        </p>
      </Card>
    </div>
  {/if}
</div>


