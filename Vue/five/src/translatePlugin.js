export default {
  install(app, options) {
    let current = "ru";
    const changeLang = () => {
        current = current === 'ru' ? 'en' : 'ru'
    };
    app.config.globalProperties.$alert = (text) => {
      window.alert(text);
    };
    app.config.globalProperties.$translate = (key) => {
      return key.split(".").reduce((words, k) => {
        return words[k] || "=== UNKNOWN ===";
      }, options[current]);
    };
    app.provide("language", changeLang);
  },
};
