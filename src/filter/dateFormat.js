import Vue from 'vue';
Vue.filter('dateFormat', value => {
  if (!value) {
    return '';
  }
  const date = new Date(value);
  return `${('0' + date.getDate()).slice(-2)}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;
});
