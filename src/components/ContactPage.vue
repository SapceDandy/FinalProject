<template>
  <section class="wrapper">
      <section class="textWrapper">
          <h1 :class="{ 'animateText': animateText }" class="title">Contact Us</h1>
          <form @submit.prevent="sendEmail" class="contactForm" :class="{ 'animateText': animateForm }">
              <input type="text" v-model="name" placeholder="Your Name" required />
              <input type="email" v-model="email" placeholder="Your Email" required />
              <textarea v-model="message" placeholder="Your Message" required></textarea>
              <button type="submit">Send</button>
          </form>
      </section>
      <section class="imageWrapper">
          <div class="contactImage"></div>
      </section>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    sendEmail() {
      let templateParams = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      this.$emailjs.send('service_s19qkvf', 'template_9cb66f8', templateParams, 'WppFypXPl7Gr1Khzj')
        .then((result) => {
          console.log('SUCCESS!', result.text);
        }, (error) => {
          console.log('FAILED...', error.text);
        });

      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
}

.textWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding: 20px;
}

.imageWrapper {
    width: 50%;
    height: 100vh;
}

.contactImage {
    background-image: url('../assets/exxy_pic.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
}

.title {
    font-size: 7rem;
    margin-bottom: 2rem;
}

.contactForm {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 60%;
}

.contactForm input, .contactForm textarea {
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 10px;
    border: none;
}

.contactForm button {
    font-size: 1.5rem;
    padding: 1rem;
    color: #fff;
    background-color: #e8c432;
    border: none;
    border-radius: 50px;
    cursor: pointer;
}

.contactForm button:hover {
    background-color: #f8d762;
}
</style>