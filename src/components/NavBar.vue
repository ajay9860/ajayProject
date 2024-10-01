<template>
  <div class="column section right_container">
    <div class="columns is-multiline">
      <div class="column is-12" style="padding: 0.75rem 0.75rem 0rem 0.75rem;">
        <!-- Navbar starts -->
        <nav class="navbar" role="navigation" style="background-color:#d3d3d3" >
          <div class="navbar-menu is-hidden-mobile">
            <h1 class="subtitle is-5 has-text-weight-bold has-title-centered">Dubai South Gate Pass Portal</h1>
            <div class="navbar-end">
              <div class="navbar-item dropdown is-hoverable is-right">
                <div class="dropdown-trigger">
                  <strong class="has-text-black">
                    <span class="icons userdetail has-text-black has-text-primary">
                      <i class="fas fa-user-circle"></i>
                    </span>
                  </strong>
                </div>
                <div class="dropdown-menu dropdownbox">
                  <div class="dropdown-content">
                    <div class="dropdown-item">
                      <span class="icon">
                        <i class="fas fa-user"></i>
                      </span>&nbsp;
                      <router-link :to="{ name: 'editprofile' }">
                        Edit Profile
                      </router-link>
                      <hr class="dropdown-divider">
                      <span class="icon">
                        <i class="fas fa-sign-out-alt"></i>
                      </span>&nbsp;
                      <a @click.prevent="logout">Log Out</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-hidden-tablet mobile_nav">
            <div class="column is-6-mobile has-text-left">
              <a class="button is-primary" @click.prevent="showMenu()">
                <span class="icon is-small">
                  <i class="fas fa-bars"></i>
                </span>
              </a>
            </div>
            <div class="column is-6-mobile has-text-right">
              <!-- <button class="button is-primary" @click.prevent="logout">
                <strong>Sign Out</strong>
              </button> -->
              <div class="navbar-item dropdown is-hoverable is-right">
                <div class="dropdown-trigger">
                  <strong class="has-text-black">
                    <span class="icons userdetail1 has-text-white">
                      <i class="fas fa-2x fa-user-circle"></i>
                    </span>
                  </strong>
                </div>
                <div class="dropdown-menu dropdownbox">
                  <div class="dropdown-content">
                    <div class="dropdown-item has-text-left">
                      <span class="icon">
                        <i class="fas fa-user"></i>
                      </span>&nbsp;
                      <router-link :to="{ name: 'editprofile' }">
                        Edit Profile
                      </router-link>
                      <hr class="dropdown-divider">
                      <span class="icon">
                        <i class="fas fa-sign-out-alt"></i>
                      </span>&nbsp;
                      <a @click.prevent="logout">Log Out</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <!-- Navbar ends -->
      </div>
      <div class="column is-12" style="padding-top:0">
        <transition name="component-fade" mode="out-in">
          <router-view class="inside_container" />
        </transition>
      </div>
    </div>
  </div>
  </template>
<script>
import STORAGE from '@/storage';
// import CONSTANTS from '@/utils/constants';

export default {
  name: 'navbar',
  methods: {
    toggleNavigationView: function () {
      const navigationView = document.getElementById('myNavigationView');
      const toggleButton = document.getElementById('myToggleButton');

      navigationView.classList.toggle('is-active');
      toggleButton.classList.toggle('is-active');
    },
    showMenu: function () {
      document.getElementById('sidebar').classList.toggle('is-hidden-mobile');
    },
    logout: async function () {
      try {
        // await http.put(`${CONSTANTS.API_URL}/api/user/auth`);
        await STORAGE.user.clearToken();

        return this.$router.push({
          name: 'login'
        });
      } catch (e) {
        console.log('error in logout', e);
        return this.$buefy.snackbar.open({
          duration: 3000,
          message: e.message,
          type: 'is-danger'
        });
      }
    }
  }
};
</script>

<style media="screen">
.demo {
  margin: 1em;
}

.sidebar {
  width: 14rem;
}
</style>
