const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      image: 'https://i.kym-cdn.com/entries/icons/facebook/000/027/852/Screen_Shot_2018-12-12_at_1.02.39_PM.jpg'
    }
  }
}).mount('#app')