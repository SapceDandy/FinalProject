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
    },
    mounted() {
      setTimeout(() => {
          this.animateText = true;
      }, 1000);
    },
  }
  </script>
  
  <style scoped>
  .about {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
    color: #4d4c4c;
    height: 100vh;
    font-family: 'Lato', sans-serif;
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  }
  
  .about h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  
  .about p {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  
  .content {
    max-width: 50%;
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
  }
  
  .image-wrapper {
    max-width: 40%;
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s;
  }
  
  .image-wrapper img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  @media (max-width: 768px) {
    .about {
      flex-direction: column;
      padding: 20px;
    }

    .about h1 {
      font-size: 2.5rem;
    }

    .content {
      width: 100%;
      padding-bottom: 20px;
    }

    .image-wrapper {
      width: 100%;
    }

    .image-wrapper img {
      max-width: 100%;
      height: auto;
    }

    .about p {
      font-size: 1rem;
      line-height: 1.6rem;
    }
  }
</style>
