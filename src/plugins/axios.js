import axios from 'axios';
import VueAxios from 'vue-axios';

const axiosPlugin = {
  install(Vue) {
    const axiosInstance = axios.create({
      baseURL: `${process.env.VUE_APP_BASE_URL}`,
      timeout: 60 * 1000, // Timeout,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    axiosInstance.interceptors.request.use(async (config) => {
      // eslint-disable-next-line no-param-reassign
      config.params = {
        ...config.params,
        apikey: process.env.VUE_APP_API_TOKEN,
      };
      return config;
    });
    axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        alert(error.response.data.message);
        const err = await Promise.reject(error);
        return err;
      },
    );
    Vue.use(VueAxios, axiosInstance);
  },
};

export default axiosPlugin;
