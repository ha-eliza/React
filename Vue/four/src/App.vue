<template>
  <div class="container mt-4">
    <div class="row">
      <div class="ccol-sm-4 mx-auto">
        <form @submit.prevent="registerUser">
          <Transition name="slide-fade" :duration="450">
            <div v-show="step === 1" class="step mb-5">
              <div class="mb-3">
                <label for="name" class="form-label">Ваше имя</label>
                <input
                  v-model="name"
                  @blur="v$.name.$touch()"
                  type="text"
                  class="form-control"
                  id="name"
                  :class="{ 'is-invalid': v$.name.$error }"
                />
                <div v-if="v$.name.$error" class="invalid-feedback">
                  Имя не заполнено
                </div>
              </div>

              <div class="mb-3">
                <label for="surname" class="form-label">Ваша фамилия</label>
                <input
                  v-model="surname"
                  @blur="v$.surname.$touch()"
                  type="text"
                  class="form-control"
                  id="surname"
                  :class="{ 'is-invalid': v$.surname.$error }"
                />
                <div v-if="v$.surname.$error" class="invalid-feedback">
                  Фамилия не заполнена
                </div>
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  v-model="email"
                  @blur="v$.email.$touch()"
                  type="email"
                  class="form-control"
                  id="email"
                  :class="{ 'is-invalid': v$.email.$error }"
                />
                <div v-if="v$.email.$error" class="invalid-feedback">
                  Email не заполнен или некорректен
                </div>
              </div>

              <button
                @click="nextStep"
                type="button"
                class="btn btn-primary"
                :disabled="disabledBtn1"
              >
                Следующий шаг
              </button>
            </div>
          </Transition>

          <Transition name="slide-fade" :duration="450">
            <div v-show="step === 2" class="step mb-5">
              <div class="mb-3">
                <label for="psw" class="form-label">Пароль</label>
                <input
                  v-model="psw"
                  @blur="v$.psw.$touch()"
                  :type="showPass ? 'text' : 'password'"
                  class="form-control"
                  id="psw"
                  :class="{ 'is-invalid': v$.psw.$error }"
                />

                <button
                  type="button"
                  @click="showPass = !showPass"
                  class="btn btn-outline-secondary btn-sm mt-1"
                >
                  {{ showPass ? "Скрыть пароль" : "Показать пароль" }}
                </button>
                <div v-if="v$.psw.$error" class="text-danger">
                  <small>Минимум 6 символов</small>
                </div>
              </div>

              <div class="mb-3">
                <label for="psw2" class="form-label"
                  >Подтверждение пароля</label
                >
                <input
                  v-model="psw2"
                  @blur="v$.psw2.$touch()"
                  :type="showPass2 ? 'text' : 'password'"
                  class="form-control"
                  id="psw2"
                  :class="{ 'is-invalid': v$.psw2.$error }"
                />

                <button
                  type="button"
                  @click="showPass2 = !showPass2"
                  class="btn btn-outline-secondary btn-sm mt-1"
                >
                  {{ showPass2 ? "Скрыть пароль" : "Показать пароль" }}
                </button>
                <div v-if="v$.psw2.$error" class="text-danger">
                  <small>Пароли не совпадают</small>
                </div>
              </div>

              <button
                @click="backStep"
                type="button"
                class="btn btn-light me-2"
              >
                Назад
              </button>
              <button
                @click="nextStep"
                type="button"
                class="btn btn-primary"
                :disabled="disabledBtn2"
              >
                Следующий шаг
              </button>
            </div>
          </Transition>

          <Transition name="slide-fade" :duration="450">
            <div v-show="step === 3" class="step mb-5">
              <div class="mb-3">
                <label for="country" class="form-label">Страна</label>
                <input
                  v-model="country"
                  @blur="v$.country.$touch()"
                  type="text"
                  class="form-control"
                  id="country"
                  :class="{ 'is-invalid': v$.country.$error }"
                />
                <div v-if="v$.country.$error" class="invalid-feedback">
                  Разрешены только русские буквы
                </div>
              </div>

              <div class="mb-3">
                <label for="city" class="form-label">Город</label>
                <input
                  v-model="city"
                  @blur="v$.city.$touch()"
                  type="text"
                  class="form-control"
                  id="city"
                  :class="{ 'is-invalid': v$.city.$error }"
                />
                <div v-if="v$.city.$error" class="invalid-feedback">
                  Разрешены только русские буквы
                </div>
              </div>

              <button
                @click="backStep"
                type="button"
                class="btn btn-light me-2"
              >
                Назад
              </button>
              <button type="submit" class="btn btn-success">Отправить</button>
            </div>
          </Transition>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  helpers,
  sameAs,
  minLength,
} from "@vuelidate/validators";

const alpha = helpers.regex(/^[а-яёА-ЯЁ\s-]+$/);

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      step: 1,
      showPass: false,
      showPass2: false,
      name: "",
      surname: "",
      psw: "",
      psw2: "",
      email: "",
      country: "",
      city: "",
    };
  },
  methods: {
    nextStep() {
      this.step++;
    },
    backStep() {
      this.step--;
    },
    async registerUser() {
      const isValid = await this.v$.$validate();
      if (!isValid) {
        console.log("Форма заполнена неверно");
        return;
      }
      console.log("Регистрация прошла успешно");
      console.log(this.name);
    },
  },
  computed: {
    disabledBtn1() {
      return (
        this.v$.name.$invalid ||
        this.v$.surname.$invalid ||
        this.v$.email.$invalid
      );
    },
    disabledBtn2() {
      return this.v$.psw.$invalid || this.v$.psw2.$invalid;
    },
    disabledBtn3() {
      return this.v$.country.$invalid || this.v$.city.$invalid;
    },
  },
  validations() {
    return {
      name: { required },
      surname: { required },
      psw: { required, minLength: minLength(6) },
      psw2: {
        required,
        sameAs: sameAs(this.psw),
      },
      email: { required, email },
      country: { required, alpha },
      city: { required, alpha },
    };
  },
};
</script>

<style></style>
