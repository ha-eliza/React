<!-- <template>
  <div class="card">
    <app-alert
    title="Внимание"
    text="Это важная информация"
    type="orange"
    :closable="true"
    @close="alert=false"></app-alert>
    <div class="card">
      <button @click="toogleAlert">{{ alert ? 'Скрыть' : 'Показать' }} сообщение</button>
    </div>
    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from './components/AppAlert.vue';
import AppBlock from './components/AppBlock.vue';
import alertMixin from './alertMixin';

export default {
  mixins: [alertMixin],
  components: {
    AppAlert,
    AppBlock
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
</style> -->

<!-- <template>
  <div class="container">
    <div class="card">
      <h2 v-color:[type].blink.hover="myColor">Директивы</h2>
      <div class="">
        <label for="inp"></label>
        <input type="text" v-focus id="inp">
      </div>
      <button @click="myColor='red'">Сделать красным</button>
      <button @click="type = type === 'color' ? 'background' : 'color'">Переключить тип</button>
    </div>
  </div>
</template>

<script>
import focusDirective from './focusDirective';
import colorDirective from './colorDirective';

export default {
  data() {
    return {
      myColor: 'orange',
      type: 'color'
    }
  },
  directives: {
    focus: focusDirective,
    color: colorDirective
  }
}
</script> -->

<template>
  <div class="container">
    <div class="card">
      <h2>{{ $translate('app.title') }}</h2>
      <button @click="changeLang">Переключить язык</button>
      <button @click="$alert('Yes')">Alert</button>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['language'],
  methods: {
    changeLang() {
      this.language('en')
      this.$forceUpdate()
    }
  }
}
</script>
