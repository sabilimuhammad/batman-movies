import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import Dialog from '@/components/Dialog.vue';
import BackToTop from '@/components/BackToTop.vue';

const globalComponents = {
  install(Vue) {
    Vue.component('law-input', Input);
    Vue.component('law-button', Button);
    Vue.component('law-card', Card);
    Vue.component('law-dialog', Dialog);
    Vue.component('law-back-to-top', BackToTop);
  },
};

export default globalComponents;
