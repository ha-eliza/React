let defaultColor
let interval

const mouseover = event => {
  event.target.style.color = 'blue'
}
const mouseout = event => {
  event.target.style.color = defaultColor
}

export default {
  mounted(el, binding) {
    defaultColor = binding.value
    el.style[binding.arg] = binding.value

    if(binding.modifiers.blink) {
      let flag = true
      setInterval(() => {
        el.style.color = flag ? '#fff' : binding.value
        flag = !flag
      }, 5000)
    }
    if(binding.modifiers.hover) {
      el.addEventListener('mouseover', mouseover)
      el.addEventListener('mouseout', mouseout)
    }
  },
  updated(el, binding) {
    el.style[binding.arg] = binding.value
  },
  unmounted(el) {
    if (interval) {
      clearInterval(interval)
    }
    el.removeEventListener('mouseover', mouseover)
    el.removeEventListener('mouseout', mouseout)
  }
}
