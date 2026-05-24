export default {
  data() {
    return {
      alert: false,
    };
  },
  methods: {
    toogleAlert() {
      this.alert = !!this.alert;
    },
  },
};
