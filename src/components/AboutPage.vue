<template>
    <transition name="fade">
      <section class="about">
        <div class="content">
          <h1>About Exxy</h1>
          <p>Welcome to Exxy, your new favourite digital portfolio platform. At Exxy, our mission is to provide a unique and personalized way for you to showcase your work, skills, and experience.</p>
          <p>Whether you're a designer, developer, artist, writer, or any other kind of creative professional, Exxy is designed with you in mind. You can customize your portfolio to fit your personal style and professional brand, and our user-friendly interface makes it easy to keep your portfolio up to date.</p>
        </div>
        <div class="image-wrapper">
          <img :src="aboutImage" alt="About Exxy" />
        </div>
      </section>
    </transition>
  </template>
  
  <script>
  export default {
    data() {
      return {
        aboutImage: require('../assets/exxy_pic.jpg')
      }
    }
  }
  </script>
  
  <style scoped>
  .about {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  
  .content {
    width: 60%;
  }
  
  .image-wrapper {
    width: 30%;
  }
  
  .image-wrapper img {
    width: 100%;
    height: auto;
  }
  
  /* Add transitions */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>