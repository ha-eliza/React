<template>
  <div>
    <h1>Умная почта</h1>
    <form action="" class="card" @submit.prevent="submit">
      <div class="input">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="input">
        <label for="pass">Password:</label>
        <input type="password" id="pass" v-model.trim="pass" />
      </div>
      <router-link to="/dashboard">
        <button class="btn base">Войти</button>
      </router-link>
      <router-link to="/forget">
        <button class="btn warning">Забыли пароль?</button>
      </router-link>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  computed: {
    isValid() {
      return this.email !== "" && this.pass !== "";
    },
  },
  methods: {
    submit() {
      if (this.isValid) {
        console.log("Авторизация");
      }
    },
  },
};
</script>
