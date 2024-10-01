<template>
  <div class="columns is-gapless main_container custom-bgimg">
    <Sidebar />
    <Navbar />
  </div>
</template>

<script>
// @ is an alias to /src
// Components
import Navbar from '@/components/NavBar.vue';
import Sidebar from '@/components/SideBar.vue';

import STORAGE from '../storage';

export default {
  name: 'home',
  components: {
    Navbar,
    Sidebar
  },
  created: async function () {
    try {
      await STORAGE.user.refreshInfo();
      // await STORAGE.user.refreshMigrationInfo();
    } catch (e) {
      console.log('Error in refreshInfo call', e);
    }
  }
};
</script>
<style scoped>
/* .custom-bgimg {
  background-image: url('../../public/images3.jpeg');
} */
</style>
