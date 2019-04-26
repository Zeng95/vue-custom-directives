Vue.directive('color', (el, binding) => {
  el.style.color = binding.value
})

// Register a global custom directive called `v-switching-color`
Vue.directive('switching-color', {
  bind(el, binding) {
    const modifiers = binding.modifiers

    if (modifiers.underline) {
      el.style.textDecoration = 'underline'
    }
    if (modifiers.textcenter) {
      el.style.textAlign = 'center'
    }

    const speeds = {
      slow: 2000,
      normal: 1000,
      fast: 500,
      crazy: 100
    }
    const speedName = binding.arg || 'normal'
    const speed = speeds[speedName]

    const colors = binding.value
    let i = 0

    el.__SwitchingColorTimer__ = setInterval(() => {
      console.log('coloring')
      el.style.color = colors[i]

      i = (i < colors.length - 1) ? i + 1 : 0;
    }, speed)
  },

  unbind(el, binding) {
    clearInterval(el.__SwitchingColorTimer__)
    el.__SwitchingColorTimer__ = null
  }
})

new Vue({
  el: '#app',

  data() {
    return {
      colors: ['red', 'orange', 'blue', 'green'],
      show: true
    }
  },

  directives: {
    clickOutside: {
      bind: (el, binding) => {
        el.__ClickOutsideHandler__ = event => {
          let targetElement = event.target;

          do {
            if (targetElement === el) {
              // This is a click inside. Do nothing, just return.
              el.querySelector(".flyout-debug").textContent = "Clicked Inside!";
              binding.value()
              return;
            }
            // Go up the DOM
            targetElement = targetElement.parentNode;
          } while (targetElement);
          // This is a click outside.
          el.querySelector(".flyout-debug").textContent = "Clicked Outside!";
        }

        document.addEventListener('click', el.__ClickOutsideHandler__)
      },

      unbind: (el) => {
        document.removeEventListener('click', el.__ClickOutsideHandler__)
        el.__ClickOutsideHandler__ = null
      }
    }
  },

  methods: {
    clickedOutside() {
      alert('You Clicked Inside')
    }
  },

  created() {
    this.colors.push('pink')
  },
})