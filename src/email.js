import emailjs from 'emailjs-com';

export default {
  install: (app) => {
    app.config.globalProperties.$emailjs = emailjs;
  }
};