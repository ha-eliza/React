<template>
  <div class="form-page">
    <div class="card registration-form">
      <h2>Форма регистрации</h2>

      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Ваше имя:</label>
          <input v-model="formData.name" type="text" required />
        </div>

        <div class="form-group">
          <label>Дата рождения:</label>
          <input v-model="formData.birthDate" type="date" required />
        </div>

        <div class="form-group">
          <label>Ваш город:</label>
          <select v-model="formData.city">
            <option value="spb">Санкт-Петербург</option>
            <option value="msk">Москва</option>
            <option value="nsk">Новосибирск</option>
          </select>
        </div>

        <div class="form-group">
          <label>Ваш пол:</label>
          <div class="radio-group">
            <label>
              <input v-model="formData.gender" type="radio" value="male" /> М
            </label>
            <label>
              <input v-model="formData.gender" type="radio" value="female" /> Ж
            </label>
          </div>
        </div>

        <div class="form-group">
          <label>Пароль:</label>
          <input v-model="formData.password" type="password" required />
        </div>

        <div class="form-group">
          <label>Подтверждение пароля:</label>
          <input v-model="formData.confirmPassword" type="password" required />
        </div>

        <div class="form-group checkbox-group">
          <label>Лицензионное соглашение:</label>
          <label class="checkbox-label">
            <input v-model="formData.agreement" type="checkbox" required />
            Согласен
          </label>
        </div>

        <button type="submit">Отправить</button>
      </form>
    </div>

    <div v-if="submittedData" class="card display-data">
      <h2>Данные формы</h2>
      <p><strong>Ваше имя:</strong> {{ submittedData.name }}</p>
      <p>
        <strong>Дата рождения:</strong>
        {{ formatDate(submittedData.birthDate) }}
      </p>
      <p><strong>Ваш город:</strong> {{ submittedData.city }}</p>
      <p><strong>Ваш пол:</strong> {{ submittedData.gender }}</p>
      <p><strong>Пароль:</strong> {{ submittedData.password }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  name: '',
  birthDate: '',
  city: 'spb',
  gender: 'male',
  password: '',
  confirmPassword: '',
  agreement: false
})

const submittedData = ref(null)

const submitForm = () => {
  if (formData.password !== formData.confirmPassword) {
    alert('Пароли не совпадают!')
    return
  }
  submittedData.value = { ...formData }
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  return dateString.replace(/-/g, '.')
}
</script>

<style>
.form-page {
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  border: 2px solid #333;
  padding: 20px;
}

h2 {
  margin-top: 0;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}

.form-group label {
  font-size: 0.9rem;
  margin-bottom: 4px;
}

input[type="text"],
input[type="date"],
input[type="password"],
select {
  padding: 4px;
  border: 1px solid #777;
  box-sizing: border-box;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.checkbox-group .checkbox-label {
  display: flex;
  align-items: center;
  gap: 5px;
}

button {
  width: 100%;
  padding: 4px 12px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
