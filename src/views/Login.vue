<template lang="html">
  <div>
  <section class="hero is-fullheight" v-if="loginform===false">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="form-container">
          <div class="card" style="padding:1.52rem">
            <br>
            <p class="subtitle is-4 has-text-weight-bold has-text-centered">
              <span class="icon is-small is-left">
              <i class="far fa-user"></i>
              </span>
              &nbsp; LOGIN</p>
            <div class="card-content">
              <form @submit.prevent="submit">
                <b-field>
                  <b-input
                    type="email" placeholder="user@company.com" name="email" v-model.trim="user.email" required focus
                    icon="fas fa-envelope">
                  </b-input>
                </b-field>
                <br>
                <b-field class="showpassword">
                  <b-input
                    type="password" placeholder="●●●●●●●" class="password" name="password" v-model.trim="user.password" required
                    icon="fas fa-key" password-reveal>
                  </b-input>
                </b-field>
                <br>
                <div class="row">
                  <div class="columns is-mobile is-multiline">
                    <div class="column is-12-mobile">
                      <button type="submit" class="button is-outlined is-black is-fullwidth">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
                <br>
                <div class="row mt-4 custom-outer">
                  <div class="columns is-mobile is-multiline mt-4">
                    Not an account?<button class="button custom-btn" @click="RedirectToSignUp">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  <section class="hero is-fullheight" v-if="loginform===true">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="form-container">
          <div class="card" style="padding:1.52rem">
            <br>
            <p class="subtitle is-4 has-text-weight-bold has-text-centered">
              <span class="icon is-small is-left">
              <i class="far fa-user"></i>
              </span>
              &nbsp;  Sign Up</p>
            <div class="card-content">
              <form @submit.prevent="submit">
                <b-field>
                  <b-input
                    type="email" placeholder="Please Enter email" name="email" v-model.trim="signIn.email" required focus
                    icon="fas fa-envelope">
                  </b-input>
                </b-field>
                <br>
                <b-field class="showpassword">
                  <b-input
                    type="password" placeholder="Please Enter Password" class="password" name="password" v-model.trim="signIn.password" required
                    icon="fas fa-key" password-reveal>
                  </b-input>
                </b-field>
                <br>
                <div class="row">
                  <div class="columns is-mobile is-multiline">
                    <div class="column is-12-mobile">
                      <button type="submit" class="button is-outlined is-black is-fullwidth" @click="createNewUser">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
                <br>
                <div class="row mt-4 custom-outer">
                  <div class="columns is-mobile is-multiline mt-4">
                    If have an account?<button class="button custom-btn" @click="RedirectToSignIn">Log In</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
// import CONSTANTS from '@/utils/constants';
import STORAGE from '@/storage';

export default {
  name: 'Login',
  data: () => {
    return {
      user: {
        email: '',
        password: ''
      },
      signIn: {
        email: '',
        password: ''
      },
      loginform: false
    };
  },
  methods: {
    submit: async function () {
      const loadingComponent = this.$buefy.loading.open();

      for (const prop in this.user) {
        if (Object.prototype.hasOwnProperty.call(this.user, prop)) {
          if (!this.user[prop] || this.user[prop] === '') {
            loadingComponent.close();
            return this.$buefy.snackbar.open({
              duration: 2000,
              message: `Kindly enter ${prop}`,
              type: 'is-danger'
            });
          }
        }
      }

      try {
        const login = await http.post('http://localhost:8080/api/v1/myproject/validatesystemuserlogin', this.user);
        // const migrationLogin = await http.post(`${CONSTANTS.API_MIGRATION_URL}/api_migration/user/login`, this.user);
        // console.log(STORAGE.user.setToken(login.data.token), ' STORAGE.user.setToken(login.data.token)');
        console.log(login.data.token, '@@login.data.token@@');
        console.log(STORAGE.user.setToken(login.data.token), '@@@@@STORAGE.user.setToken(login.data.token)');
        await STORAGE.user.setToken(login.data.token);
        // await STORAGE.user.setMigrationToken(migrationLogin.data.token);
        await STORAGE.user.refreshInfo();
        // await STORAGE.user.refreshMigrationInfo();

        loadingComponent.close();

        return this.$router.push({
          name: 'dashboard'
        });
      } catch (e) {
        loadingComponent.close();
        console.log('Login failed', e);
        console.log(e, 'e.messsssss');
        return this.$buefy.snackbar.open({
          duration: 3000,
          message: e && e.response && e.response.data ? e.response.data.message : 'Something went wrong!',
          type: 'is-danger'
        });
      }
    },
    RedirectToSignUp: async function () {
      this.loginform = true;
    },
    RedirectToSignIn: async function () {
      this.loginform = false;
    },
    createNewUser: async function () {
      const loadingComponent = this.$buefy.loading.open();
      try {
        const signIn = await http.post('http://localhost:8080/api/v1/myproject/createNewUser', this.signIn);

        if (signIn) {
          loadingComponent.close();
          return this.$buefy.snackbar.open({
            duration: 3000,
            message: 'User Created Successful',
            type: 'is-success'
          });
        }
      } catch (e) {
        loadingComponent.close();
        console.log('Login failed', e);
        console.log(e, 'e.messsssss');
        return this.$buefy.snackbar.open({
          duration: 3000,
          message: e && e.response && e.response.data ? e.response.data.message : 'Something went wrong!',
          type: 'is-danger'
        });
      }
    }
  }
};
</script>

<style media="screen" scoped>
.card {
  box-shadow: 1px 2px 10px 4px #403e3eb3;
}
.hero {
  background: rgb(58, 144, 170);
  background: linear-gradient(90deg, rgba(58, 144, 170, 1) 11%, rgba(141, 181, 193, 0.9542191876750701) 66%);
}
.button.is-black.is-outlined {
  background-color: #398faa;
  border-color: #398faa;
  color: #2c2929;
  height: 3rem;
  font-size: 1.18rem
}

.custom-outer {
  display: flex;
  justify-content: center;
}

.button.custom-btn {
  font-size: 10px;
  margin-left: 5px;
}
</style>
