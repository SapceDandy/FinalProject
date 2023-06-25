<template>
    <section class="wrapper">
      <section class="textWrapper">
        <h1 :class="{ 'animateText': animateText }" class="name">Exodus</h1>
        <h2 :class="{ 'animateText': animateText2 }" class="job">The Esthetician</h2>
        <button 
          :class="{ 'animateText': animateText3 }" 
          @mousemove="updateGradient" 
          @mouseleave="resetGradient"
          @click="$emit('press')" 
          :style="{ 
            '--gradient': gradient, 
            '--text-shadow': textShadow,
            '--rotate': rotate + 'deg'
          }"
        >Welcome</button>
      </section>
      <section class="imageWrapper">
        <div class="exxyImage"></div>
      </section>
      <div v-if="showOverlay" class="overlay">Press SPACE to open the navigation</div>
    </section>
</template>

<script>
    export default {
        name: 'WelcomePage',
        data() {
            return {
                animateText: false,
                animateText2: false,
                animateText3: false,
                showOverlay: false,
                gradient: 'linear-gradient(0deg, #e8c432, #e8c432)',
                textShadow: '0 0 0px #ffffff',
                rotate: 0
            };
        },
        mounted() {
            setTimeout(() => {
                this.animateText = true;
            }, 1000);

            setTimeout(() => {
                this.animateText2 = true;
            }, 1100);

            setTimeout(() => {
                this.animateText3 = true;
            }, 1200);

            setTimeout(() => {
                this.showOverlay = true;
                setTimeout(() => {
                    this.showOverlay = false;
                }, 3000);
            }, 750);
        },
        methods: {
            updateGradient(event) {
                const rect = event.target.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                const percentX = Math.floor(x / rect.width * 100);
                const percentY = Math.floor(y / rect.height * 100);
                this.gradient = `radial-gradient(circle at ${percentX}% ${percentY}%, #f8d762, #e8c432)`;
                const proximity = Math.abs(rect.width / 2 - x);
                const shadowBlur = Math.max(0, Math.min(20, 20 - proximity / 5));
                this.textShadow = `0 0 ${shadowBlur}px #ffffff`;
                this.rotate = (x - rect.width / 2) / rect.width * 10;
            },           
            resetGradient() {
                this.gradient = 'linear-gradient(0deg, #e8c432, #e8c432)';
                this.textShadow = '0 0 0px #ffffff';
                this.rotate = 0;
            },
        }
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .wrapper {
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100vw;
        justify-content: center;
        align-items: center;
    }
    .imageWrapper {
        width: 50%;
        height: 100vh;
    }
    .textWrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
    }
    .exxyImage {
        width: 100%;
        height: 100vh;
        background-image: url('../assets/exxy_pic.jpg');
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .name {
        font-size: 7rem;
        font-weight: 800;
        margin: 0;
        font-family: 'Playfair Display', serif;
        color: #e8c432;
    }
    .job {
        font-size: 5.5rem;
        font-weight: 400;
        margin: 0;
        font-family: 'Lato', sans-serif;
        color: #ffffff;
    }
    button {
        font-size: 2rem;
        font-weight: 700;
        margin: 0;
        font-family: 'Lato', sans-serif;
        color: #ffffff;
        background-color: #e8c432;
        border: none;
        border-radius: 50px;
        padding: 10px 70px;
        margin-top: 50px;
        cursor: pointer;
        position: relative;
        background: var(--gradient);
        text-shadow: var(--text-shadow);
        transform: rotate(var(--rotate));
        transition: all 1.2s ease-in-out;
    }

    button:hover {
        box-shadow: 0 20px 56px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        transform: translateY(-3px);
        transition: all .5s ease-in-out;
    } 

    .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    }

    .name, .job, button {
    transform: translate3d(-65vw, 0, 0);
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
    }

    .animateText {
    transform: translate3d(0, 0, 0);
    }

    .imageWrapperAnimated {
    opacity: 1;
    }

    @keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
    }

    .textWrapperAnimated {
    animation: slideInFromLeft 1.5s ease-in-out forwards;
    }

    .nameAnimated {
    animation: slideInFromLeft 1.5s ease-in-out 1s forwards;
    }

    .jobAnimated {
    animation: slideInFromLeft 2s ease-in-out 2s forwards;
    }

    .buttonAnimated {
    animation: slideInFromLeft 2.5s ease-in-out 3s forwards;
    }
</style>