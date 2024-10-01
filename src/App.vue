<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {

    };
  },
  created: function () {
    document.title = 'Matrimoni';
  }
};
</script>
