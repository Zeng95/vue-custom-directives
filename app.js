// Vue.directive('purple', (el) => {
//   el.style.color = 'purple'
// })

Vue.directive('switching-color', {
  bind (el, binding) {
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

    setInterval(() => {
      el.style.color = colors[i]

      i = (i < colors.length - 1) ? i + 1 : 0;
    }, speed)
  }
})

new Vue({
  el: '#app',

  data() {
    return {
      colors: ['red', 'orange', 'blue', 'green']
    }
  },

  created() {
    this.colors.push('pink')
  },
})