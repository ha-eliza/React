<template>
  <div class="alert" :class="type">
    <p class="alert-title">{{ title }}</p>
    <p>{{ text }}</p>
    <button v-if="closable" @click="$emit('close')">Закрыть</button>
  </div>
</template>
<script>

export default {
  props: {
    text: String,
    title: String,
    closable: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'green',
      validator(val) {
        return ['red', 'orange', 'green'].includes(val)
      }
    }
  }
}
</script>
