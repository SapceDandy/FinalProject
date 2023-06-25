<template>
  <section class="wrapper" ref="wrapper">
    <AppNavbar :isActive="showNavbar"/>
    <transition name="slide" mode="out-in">
      <router-view @press="handlePress" />
    </transition>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar
  },
  data() {
    return {
      showNavbar: false,
      welcomePressed: false
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    handlePress() {
      this.animateOut().then(() => {
        this.welcomePressed = true;
        this.router.push({ name: 'Home' });
      });
    },
    animateOut() {
      return new Promise(resolve => {
        this.$refs.wrapper.style.transition = "opacity 1s";
        this.$refs.wrapper.style.opacity = 0;

        this.$refs.wrapper.addEventListener('transitionend', () => {
          resolve();
          this.$refs.wrapper.style.opacity = 1;
        }, { once: true });
      })
    },
    handleKeyDown(e) {
      if (e.code === 'Space') {
        e.preventDefault();
        this.showNavbar = !this.showNavbar;
      }
    }
  },
  mounted() {
    this.router.afterEach(() => {
      this.$refs.wrapper.style.opacity = 1;
    });
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.5s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}
</style>