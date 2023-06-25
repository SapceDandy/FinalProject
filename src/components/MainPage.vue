<template>
    <section class="wrapper">
        <div class="first-section">
            <div class="left-side">
                <div v-for="(expand, index) in expands" 
                     :key="index" 
                     class="service" 
                     @mouseover="expandService(index)"
                     @mouseout="shrinkService(index)">
                    <section :class="[
                            `service-${index+1} animate__animated animate__fade-in`, 
                            expand ? 'expand' : ''
                        ]">Service</section>
                </div>
            </div>
            <div class="right-side">
                <div v-for="(item, index) in images" :key="index" class="right-subsection">
                    <section class="image__wrapper">
                        <img :src="item" alt="img" class="image animate__animated animate__slide-in-right">
                    </section>
                    <div class="text animate__animated animate__slide-in-right">
                        <p class="styled-text">{{ words[index] }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="second-section">
            <div class="top-half">
                <h1>Our Work</h1>
                <h2>These bestsellers never go out of style</h2>
            </div>
            <div class="bottom-half">
                <div v-for="(item, index) in moreImages" :key="index" class="image-container">
                    <div class="imageD2">
                        <img :src="item" alt="img" class="imageS2 animate__animated animate__slide-in-right">
                        <button class="button-2 animate__animated animate__slide-in-right">Button</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
  export default {
    name: 'HomeScreen',
    data() {
      return {
        expands: Array(6).fill(false),
        images: [
            require('../assets/girl-10.jpeg'),
            require('../assets/girl-6.jpeg'),
            require('../assets/wax.jpg')
        ],
        words: [
          'Brows',
          'Lashs',
          'Hair Removal'
        ],
        moreImages: [
            require('../assets/girl-3.jpeg'),
            require('../assets/girl-7.jpeg'),
            require('../assets/wax.jpg')
        ]
      };
    },
    methods: {
      expandService(index) {
        this.expands[index] = true;
      },
      shrinkService(index) {
        this.expands[index] = false;
      },
    }
  };
</script>
  
<style scoped>
.wrapper {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: auto;
}
.first-section {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.second-section {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
}

.bottom-half {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;
}

.top-half {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;
}

.imageD2 {
    display: flex;
    height: 100%;
    width: 33.33%;
    object-fit: cover;
}

.imageS2 {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

  .service-1{
    font-size: 6rem;
    font-weight: 800;
    margin: -1rem;
    font-family: 'Playfair Display', serif;
    color: #ffffff;
  }

  .service-2{
    font-size: 6rem;
    font-weight: 800;
    margin: -1rem;
    font-family: 'Playfair Display', serif;
    color: #e8c432;
  }

  .service-3{
    font-size: 6rem;
    font-weight: 800;
    margin: -1rem;
    font-family: 'Playfair Display', serif;
    color: transparent;
    -webkit-text-stroke: 2.5px #ffffff;
  }

  .service-4{
    font-size: 6rem;
    font-weight: 800;
    margin: -1rem;
    font-family: 'Playfair Display', serif;
    color: #e8c432;
  }

  .service-5{
    font-size: 6rem;
    font-weight: 800;
    margin: -1rem;
    font-family: 'Playfair Display', serif;
    color: #ffffff;
  }

  .service-6{
    font-size: 6rem;
    font-weight: 800;
    margin: -1rem;
    font-family: 'Playfair Display', serif;
    color: transparent;
    -webkit-text-stroke: 2.5px #e8c432;
  }

  .main-section {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: slide-in-bottom 1s;
  }
  
  .left-side {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .right-side {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
  
  .right-subsection {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 33.33%;
    scroll-snap-align: start;
  }
  
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .text {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e8c432;
  }

  .image__wrapper {
    width: 100%;
    height: 100%;
    opacity: 1;
  }
  
  @keyframes slide-in-bottom {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .animate__animated.animate__fade-in {
    animation-name: fade-in;
    animation-duration: 1s;
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate__animated.animate__slide-in-right {
    animation-name: slide-in-right;
    animation-duration: 1s;
    transform: translate3d(-65vw, 0, 0);
  }
  
  @keyframes slide-in-right {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .animateText {
    transform: translate3d(0, 0, 0);
  }
  .styled-text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    color: #4d4c4c;
    background-color: #e8c432;
    border: none;
    text-align: center;
    cursor: pointer;
    transition: all 1.2s ease-out;
}
.styled-text:hover {
    box-shadow: 0 20px 56px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transform: translateY(-3px);
    color: #ffffff;
    transition: all .5s ease-out;
}

.expand {
  transition: transform 0.3s;
  transform: scale(1.1);
}

.service p {
  transition: transform 0.3s;
}

@keyframes expand {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}

@keyframes shrink {
  0% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.image-container {
  position: relative;
  display: inline-block;
}

.image-2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  overflow: hidden;
}

.image-2::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(232, 196, 50, 0.5);
  transition: background-color 0.5s ease;
}

.image-2:hover::before {
  background-color: transparent;
}

.button-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
}

.button-2:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

/* Apply animations */

.animate__animated.animate__slide-in-right {
  animation-name: slide-in-right;
  animation-duration: 1s;
  transform: translate3d(-65vw, 0, 0);
}
  
@keyframes slide-in-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>   