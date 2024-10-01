import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// My imports
import './../node_modules/@fortawesome/fontawesome-free/css/all.css'; // Fontawesome
import Buefy from 'buefy'; // Buefy CSS framework
import storage from './storage'; // Dexie for indexeddb storage
import './styles/app.scss';
import '@/filter/dateFormat';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import storeUserToken from './store/modules/tab';
const initializers = [];

Object
  .keys(storage)
  .forEach(storename => {
    initializers.push(storage[storename].init());
  });

const initalizeStores = async () => {
  await Promise.all(initializers);

  // declare a request interceptor
  http.interceptors.request.use(config => {
    // perform a task before the request is sent
    config.headers.Authorization = storage.user.getToken(); // Attach token to every request
    return config;
  }, error => {
    // handle the error
    return Promise.reject(error);
  });

  // declare a response interceptor
  http.interceptors.response.use((response) => {
    // do something with the response data
    if (response.status === 401) {
      return router.push({ name: 'login' });
    }

    return response;
  }, error => {
    // handle the response error
    const { response } = error;

    if (response.status === 401) {
      return router.push({ name: 'login' });
    }

    return Promise.reject(error);
  });

  // Vue.use(IconsPlugin);
  // Vue.use(BootstrapVue);
  Vue.config.productionTip = false;
  Vue.use(Buefy, {
    defaultIconPack: 'fas'
  });

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');

  if (!storage.user.getToken()) {
    return router.push({ name: 'login' });
  }
};
initalizeStores();
