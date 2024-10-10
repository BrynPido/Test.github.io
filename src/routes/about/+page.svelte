<script>
  import { Card, Button, Toggle } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, ImagePlaceholder, Skeleton, TextPlaceholder } from 'flowbite-svelte';

  let vCard = false;
</script>

<style>
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

   .card-container {
     opacity: 0;
     animation: ultraCoolFadeIn 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
     transition: transform 0.4s ease, box-shadow 0.4s ease;
     box-shadow: 0 15px 25px rgb(255, 255, 255);
   }

   .card-container:hover {
     transform: translateX(20px) rotate(3deg);
     box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
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

   :global(.nav-item.active) {
     animation: neonGlow 2s infinite alternate;
   }

   .card1 {
    
     position: absolute;
     margin-right: 1200px;
   }

   .card2 {
     position: absolute;
     margin-right: 120px;
   }

   .card3 {
     position: absolute;
     margin-right: -1000px;
   }
   p{
    color:#ffffff8c;
}
</style>

<div class="relative px-8">
 <Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b bg-gray-800 text-white">
   <NavHamburger />
   <NavUl>
     <NavLi class="nav-item" href="/" active={true}>Home</NavLi>
     <NavLi class="nav-item" href="/portfolio">Portfolio</NavLi>
     <NavLi class="nav-item" href="/about">About</NavLi>
     <NavLi class="nav-item" href="/contact">Contact</NavLi>
   </NavUl>
 </Navbar>
</div>

<div class="welcome-container">
 <div class="card1 card-container">
   <div class="space-y-4">
     <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKm5cpE2jvB299oMf8q18eRaer7kB_NbXOA&s" class="bg-gray-800 text-white">
       <h5 class="mb-2 text-2xl font-bold tracking-tight">Personal Life</h5>
       <p class="mb-3 font-normal leading-tight">Hello! I’m John Adrian Fontelera, an individual from Olongapo City with a diverse range of hobbies. I enjoy playing online games and basketball, as well as watching anime, which allows me to unwind and have fun. Additionally, I love listening to music and playing acoustic guitar, which helps me express my creativity and passion for the arts.</p>
     </Card>
   </div>
 </div>

 <div class="card2 card-container">
   <div class="space-y-4">
     <Card img="https://static.vecteezy.com/system/resources/previews/007/165/331/non_2x/book-icon-book-icon-simple-sign-book-icon-isolated-on-with-background-illustration-of-book-icon-free-free-vector.jpg" class="bg-gray-800 text-white">
       <h5 class="mb-2 text-2xl font-bold tracking-tight">Student Experience</h5>
       <p class="mb-3 font-normal leading-tight">My student experience so far has been amazing! I've learned a lot about various technologies since starting college, and though there are tough topics and challenging concepts, I’m confident that I can overcome them. Along the way, I’ve also made great friends who share the same interests, making the journey even more enjoyable and rewarding.</p>
     </Card>
   </div>
 </div>

 <div class="card3 card-container">
   <div class="space-y-4">
     <Card img="https://media.istockphoto.com/id/1131823079/vector/laptop-device-icon-office-appliances-for-stock.jpg?s=612x612&w=0&k=20&c=cAQUsUrMQnsVJS1ff7okx2hYVzf6mn4r2fdnpg7uLrU=" class="bg-gray-800 text-white">
       <h5 class="mb-2 text-2xl font-bold tracking-tight">Student Developer</h5>
       <p class="mb-3 font-normal leading-tight">As a student developer, I’ve discovered that effort, dedication, and hard work are crucial for achieving success in coding. Initially, this was a struggle for me as I began my learning journey, but I’ve embraced the challenges. With persistence and practice, I've started to improve, gaining confidence in my skills.                               </p>
     </Card>
   </div>
 </div>
</div>
