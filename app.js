Vue.directive('purple', (el) => {
  el.style.color = 'purple'
})

new Vue({
  el: '#app',

  data() {
    return {
      age: 5,
      content: 'You are too young',
      homepageURL: 'https://www.youtube.com/watch?v=Ok_HG-0lNCA&t=14s',
      linkTitle: 'Vowel Sound / ɪ / as in "it"- American English Pronunciation [UPDATED] - YouTube'
    }
  },
})