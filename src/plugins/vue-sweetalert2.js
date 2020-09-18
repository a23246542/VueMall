import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
// Import stylesheet
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue2-editor/dist/vue2-editor.css';// ##eslint可幫檢查-S保存
/* Import the Quill styles you want */
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.snow.css';

const options = {
  toast: false, // @@@會消失
  // timer: 1500,
  // padding: '1em',
  padding: '1rem',
  position: 'center',
};
Vue.use(VueSweetalert2, options);
