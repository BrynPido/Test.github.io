<script>

</script>

<div class="welcome-container">
<img class="logo" src="/port_logo.png" alt="Logo" />

  <div class="welcome-box  bg-gray-800 text-white">
      <h1>Welcome, Users!</h1>
      <p>I'm John Adrian F. Fontelera, a Bachelor of Science in Information Technology student from Gordon College, and this is my Student Portfolio.</p>
      <a href="/portfolio" class="btn-explore  bg-gray-800 text-white">Portfolio</a>
  </div>

  <!-- Theme Switch Toggle -->

</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Roboto:wght@400;700&display=swap');

  .welcome-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: 'Poppins', sans-serif;
      position: relative;
      transition: background 0.3s ease;
      background: linear-gradient(135deg, #303233, #282c31);
  }

  .dark {
      background: linear-gradient(135deg, #303233, #282c31);
      color: white;
  }

  .light {
      background: linear-gradient(135deg, #f0f0f0, #c0c0c0);
      color: black;
  }

  .welcome-box {
      
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 8px 15px rgb(255, 252, 252);
      width: 600px;
      max-width: 90%;
      text-align: center;
      margin-top: 90px;
  }

  .logo {
      width: 200px;
      border-radius: 50%;
      position: absolute;
      top: 120px;
      left: 50%;
      transform: translateX(-50%);
  }

  h1 {
      font-family: 'Roboto', sans-serif;
      font-size: 2.5rem;
      margin-bottom: 10px;
      font-weight: 700;
  }

  p {
      font-size: 1.2rem;
      margin-bottom: 20px;
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
  }

  .btn-explore {
      display: inline-block;
      padding: 15px 30px;
      font-size: 1.1rem;
      border: 2px;
      
      color: inherit;
      text-decoration: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease, color 0.3s ease;
      box-shadow: 0 2px 4px rgb(255, 255, 255);
  }

  .btn-explore:hover {
      background-color: rgba(255, 255, 255, 0.4);
      transform: scale(1.05);
  }

  .btn-explore:active {
      transform: scale(0.95);
  }

  .switch {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 60px;
      height: 34px;
  }

  .switch input {
      opacity: 0;
      width: 0;
      height: 0;
  }

  .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #333;
      transition: 0.4s;
      border-radius: 34px;
  }

  .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
  }

  input:checked + .slider {
      background-color: #555;
  }

  input:checked + .slider:before {
      transform: translateX(26px);
  }
</style>
