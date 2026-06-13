<template>
  <div class="card">
    <h1>Забыли пароль?</h1>
    <div class="input">
      <label for="tel">Номер телефона</label>
      <input type="tel" id="tel" v-model.trim="tel" />
    </div>
    <router-link to="/login">
      <button class="btn base">Вернуться</button>
    </router-link>
  </div>
</template>
<script></script>
