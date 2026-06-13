<template>
  <div class="card">
    <div class="card-nav">
      <ul class="list">
        <li class="list-item" v-for="email in emails" :key="email.id">
          <a href="#">{{ email.theme }}</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <add-email-body></add-email-body>
    </div>
  </div>
</template>
<script>
import AddEmailBody from '@/components/AddEmailBody.vue';

export default {
  inject: ['emails'],
  components: {
    AddEmailBody
  }
}
</script>
<style scoped>
.card {
  display: flex;
  grid-template: 50px;
}
.card-nav {
  min-width: 40%;
  border-right: 3px solid #000;
  border-radius: 5px;
}
.list{
  list-style: none;
}
.list-item {
  padding: 10px;
}
.list-item a {
  text-decoration: none;
  font-weight: bold;
  color: rgb(130, 192, 36);
}
.list-item a:hover {
  color: green;
}
.card-body {
  padding: 10px;
}
</style>
