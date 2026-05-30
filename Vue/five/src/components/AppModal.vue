<template>
  <div class="modal-back" @click="$emit('close')"></div>
  <div class="modal">
    <h3>Заголовок</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, magni?</p>
  </div>
</template>
<script>
export default {
  emits: [close]
}
</script>
<style>
.modal {
  position: fixed;
  left: 30px;
  top: 50px;
  width: 300px;
  background-color: #fff;
  border: 1px solid #000;
  padding: 20px;
}
.modal-back {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
}
</style>
