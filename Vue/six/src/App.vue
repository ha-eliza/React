<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  provide() {
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        {id: 1, theme: 'Тема письма 1'},
        {id: 2, theme: 'Тема письма 2'},
        {id: 3, theme: 'Тема письма 3'},
        {id: 4, theme: 'Тема письма 4'},
        {id: 5, theme: 'Тема письма 5'},
      ]
    }
  }
}
</script>

