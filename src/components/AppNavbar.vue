<template>
    <div class="navbarContainer" :class="{active: isActive, transitioning: isTransitioning}">
      <nav class="navbar">
        <section class="logo">
          <a href="/">
            <img src="../assets/exxy_logo.png" alt="img" class="image">
          </a>
        </section>
        <ul class="nav_elements">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
</template>
    
<script>
  export default {
    name: 'AppNavbar',
    props: {
      isActive: Boolean,
      isTransitioning: Boolean
    }
  }
</script>
  
  
<style scoped>
  .logo {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 85%;
    height: 100%;
  }
  .nav_elements {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 15%;
    height: 100%;
  }
  .image {
    width: auto;
    height: 3rem;
    padding: 0 1rem;
  }
  .navbarContainer {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
    transition: opacity 0.3s ease;
    opacity: 0;
    visibility: hidden;
    z-index: 1000;
  }
  
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    max-height: 2.5rem;
    z-index: 1001;
    transform: translateY(-100%);
    transition: transform 0.3s ease-out;
  }
  
  .navbarContainer.active {
    opacity: 1;
    visibility: visible;
  }

  .navbarContainer.active .navbar {
    transform: translateY(0);
  }
  .navbarContainer.transitioning .navbar {
    transform: translateY(-100%);
  }
  
  .navbar {
    margin: auto;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #e8c432;
    padding: 20px 0;
    z-index: 100;
    font-family: 'Lato', sans-serif;
    display: flex;
    justify-content: center;
  }
  
  .navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    width: 80%;
  }
  
  .navbar a {
    color: #e8c432;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease-in-out;
  }

  .navbar ul a:hover {
    color: #ffe792;
  }
  
  .navbar li {
    transition: transform 0.3s ease-in-out;
  }

  .navbar li:hover {
    transition: transform 0.3s ease-in-out;
    transform: scale(1.2);
  }
</style>  