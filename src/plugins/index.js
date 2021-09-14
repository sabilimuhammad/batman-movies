import axiosPlugin from './axios';
import globalComponents from './globalComponents';

import '@/assets/scss/style.scss';

const plugins = {
  install(Vue) {
    Vue.use(axiosPlugin);
    Vue.use(globalComponents);
  },
};

export default plugins;
