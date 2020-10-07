export default {
  methods: {
    setCookie(name, value) {
      const Days = 30;
      const exp = new Date();
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${escape(value)};expires=${exp.toGMTString()}`;
    },
    getCookie(name) {
      const arr = document.cookie.match(
        new RegExp(`(^| )${name}=([^;]*)(;|$)`),
      );
      if (arr != null) return unescape(arr[2]);
      return null;
    },
    delCookie(name) {
      const exp = new Date();
      exp.setTime(exp.getTime() - 1);
      const cval = this.getCookie(name);
      // console.log(cval);
      if (cval != null) { document.cookie = `${name}=${cval};expires=${exp.toGMTString()}`; }
    },
  },
};
