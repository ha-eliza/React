<template>
  <div class="card">
    <app-alert
    title="Внимание"
    text="Это важная информация"
    type="red"
    @close="alert=false"></app-alert>
    <div class="card">
      <button @click="toogleAlert">{{ alert ? 'Скрыть' : 'Показать' }} сообщение</button>
    </div>
  </div>
</template>

<script>
import AppAlert from './AppAlert.vue';
import alertMixin from '@/alertMixin';

export default {
  mixins: [alertMixin],
  components: {
    AppAlert
  }
}
</script>

<style>
.alert {
  padding: 20px;
  background: #eee;
}
.red {
  border-left: 5px solid red;
}
.orange {
  border-left: 5px solid orange;
}
.green {
  border-left: 5px solid green;
}
</style>
