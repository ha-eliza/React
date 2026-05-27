<template>
  <div class="stepper-container">
    <h2>План по изучению Фронтенд-разработки</h2>

    <div class="steps-header">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="['step-item', { active: currentStep === index }]"
        @click="currentStep = index"
      >
        <span class="step-number">{{ index + 1 }}</span>
        <span class="step-name">{{ step.title }}</span>
      </div>
    </div>

    <div class="content-box">
      <p>{{ steps[currentStep].content }}</p>
    </div>

    <div class="buttons-row">
      <button :disabled="currentStep === 0" @click="goBack">Назад</button>

      <button @click="goForward">
        {{ currentStep === steps.length - 1 ? "Завершить" : "Далее" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const steps = [
  {
    title: "Figma",
    content: "Figma — инструмент для создания интерфейсов и прототипов.",
  },
  {
    title: "HTML/CSS",
    content: "HTML и CSS — база для верстки структуры и стилизации сайтов.",
  },
  {
    title: "JavaScript",
    content: "JavaScript — язык программирования для оживления страниц.",
  },
  { title: "React", content: "React — библиотека для создания интерфейсов." },
  {
    title: "Vue",
    content:
      "Vue.js — фреймворк для разработки сайтов и веб-приложений, написанный на JavaScript.",
  },
];

const currentStep = ref(0);

const goBack = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

const goForward = () => {
  if (currentStep.value === steps.length - 1) {
    currentStep.value = 0;
  } else {
    currentStep.value++;
  }
};
</script>

<style>
.stepper-container {
  font-family: sans-serif;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.steps-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.step-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.6;
}
.step-item.active {
  opacity: 1;
  font-weight: bold;
}
.step-number {
  background: #053b1b;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
}
.content-box {
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 20px;
  min-height: 80px;
  margin-bottom: 20px;
}
.buttons-row {
  display: flex;
  justify-content: center;
  gap: 15px;
}
button {
  background: #053b1b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
}
button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
