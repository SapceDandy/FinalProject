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
                      <section class="btn_wrap">
                        <button 
                            class="button-2 animate__animated animate__slide-in-right" 
                            :style="{ '--gradient': gradient, '--text-shadow': textShadow, '--rotate': rotate + 'deg' }"
                            @mousemove="updateGradient" 
                            @mouseleave="resetGradient"
                        >
                            {{ buttonWords[index] }}
                        </button>
                      </section>
                      <img :src="item" alt="img" class="imageS2 animate__animated animate__slide-in-right">
                    </div>
                </div>
            </div>
        </div>
        <div class="first-section">
          <div class="left-image"></div>
          <div class="right-side" :style="{'background-color': '#e8c432'}">
            <h1 class="create-account">Create an Account</h1>
            <div v-for="(item, index) in moreButtonText" :key="index" class="button-and-text">
              <span class="text-class">{{ item }}</span>
              <a href="/contact">
                <button 
                  class="button-3 animate__animated animate__slide-in-right"
                  :style="{ 'position': 'relative','--gradient': gradient, '--text-shadow': textShadow, '--rotate': rotate + 'deg', 'background-color': '#eeddcc' }"
                  @mousemove="updateGradient" 
                  @mouseleave="resetGradient"
                >
                Book Now
                </button>
             </a>
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
        ],
        buttonWords: [
          'Brow Lamination + Henna',
          'Eyelashe Extensions',
          'Hair Removal'
        ],
        moreButtonText: [
          'Consult with a skincare expert',
          'Book a professional make-up artist'
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
    height: 100%;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    row-gap: 2rem;
    background-color: #e8c432;
}

.button-and-text {
  display: flex;
  width: 100%;
  height: 75%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
}

.bottom-half {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65%;
    width: auto;
}

.text-class {
  font-size: 2.2rem;
  font-weight: 400;
  font-family: 'Lato', san-serif;
  color: #eeddcc;
}

.top-half {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    padding: 1rem;
    height: 35%;
    width: 100%;
}

.top-half h1 {
    font-size: 5rem;
    font-weight: 800;
    margin: -1rem;
    font-family: 'Playfair Display', serif;
    color: #4d4c4c;
}

.create-account {
  font-size: 4.5rem;
  font-weight: 800;
  margin: -1rem;
  padding: 2rem;
  font-family: 'Playfair Display', serif;
  color: #4d4c4c;
}

.top-half h2 {
    font-size: 2rem;
    font-weight: 400;
    margin: -1rem;
    font-family: 'Playfair Display', serif;
    color: #ffffff;
}

.imageD2 {
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
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
    overflow: none;
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
      transform: translateY(100%) ease-in-out;
      opacity: 0;
    }
    100% {
      transform: translateY(0) ease-in-out;
      opacity: 1;
    }
  }

  .animate__animated.animate__fade-in {
    animation-name: fade-in;
    animation-duration: 1s;
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s ease-in-out;
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
    transform: translate3d(-65vw, 0, 0) ease-in-out;
  }
  
  @keyframes slide-in-right {
    0% {
      transform: translateX(100%) ease-in-out;
      opacity: 0;
    }
    100% {
      transform: translateX(0) ease-in-out;
      opacity: 1;
    }
  }
  .animateText {
    transform: translate3d(0, 0, 0) ease-in-out;
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
    transition: all 1.2s ease-in-out;
}
.styled-text:hover {
    box-shadow: 0 20px 56px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transform: translateY(-3px);
    color: #ffffff;
    transition: all .5s ease-in-out;
}

.expand {
  transition: transform 0.3s ease-in-out;
  transform: scale(1.1);
}

.service p {
  transition: transform 0.3s ease-in-out;
}

@keyframes expand {
  0% { transform: scale(1) ease-in-out; }
  100% { transform: scale(1.1) ease-in-out; }
}

@keyframes shrink {
  0% { transform: scale(1.1) ease-in-out; }
  100% { transform: scale(1) ease-in-out; }
}

.image-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: blue;
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
  transition: background-color 0.5s ease-in-out;
}

.image-2:hover::before {
  background-color: transparent;
}

.image_wrap {
  position: relative;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.left-image {
    background-image: url('../assets/girl-4.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
    height: 100vh;
}

.button-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  color: #ffffff;
  background-color: #e8c432;
  border: none;
  border-radius: 50px;
  padding: 30px 60px;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s ease-in-out;
  z-index: 100;
}

.button-2:hover {
    box-shadow: 0 20px 56px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transition: all .5s ease-in-out;
} 

.button-3 {
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  color: #4d4c4c;
  cursor: pointer;
  background-color: #e8c432;
  border: none;
  border-radius: 50px;
  padding: 20px 60px;
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s ease-in-out;
}

.button-3:hover {
    box-shadow: 0 20px 56px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transition: all .5s ease-in-out;
} 

/* Apply animations */

.animate__animated.animate__slide-in-right {
  animation-name: slide-in-right;
  animation-duration: 1s;
  transform: translate3d(-65vw, 0, 0) ease-in-out;
}
  
@keyframes slide-in-right {
  0% {
    transform: translateX(100%) ease-in-out;
    opacity: 0;
  }
  100% {
    transform: translateX(0) ease-in-out;
    opacity: 1;
  }
}
</style>   