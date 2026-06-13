<template>
  <div class="container">
    <header>
      <router-link to="/main">
        <p>Главная</p>
      </router-link>
      <router-link to="/about">
        <p>О нас</p>
      </router-link>
      <router-link to="/contact">
        <p>Контакты</p>
      </router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {

}
</script>

