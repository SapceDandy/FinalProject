<template>
    <div class="navbarContainer" :class="{active: isActive, transitioning: isTransitioning}">
      <nav class="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
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
  .navbarContainer {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
    transition: opacity 0.3s ease;
    opacity: 0;
    visibility: hidden;
    z-index: 1000; /* put navbar on top of other elements */
  }
  
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1001; /* ensure the navbar itself is above the overlay */
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
    width: 80%;  /* adjust this to add space at the sides */
  }
  
  .navbar a {
    color: #e8c432;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;
  }
  
  .navbar a:hover {
    color: #f8d762;
  }
</style>  