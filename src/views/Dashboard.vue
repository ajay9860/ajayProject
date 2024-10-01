<template>
  <div>
    <row>
      <button class="button is-pulled-left" data-tooltip="Tooltip Text" @click="toggleFilterModal">
          Add New Country
        </button>
        <div class="is-pulled-right custom-drop" data-tooltip="Tooltip Text">
  <div class="select-with-clear">
    <select v-model="country" class="custom-select-height">
      <option value="">Select Country</option>
      <option v-for="(country, index) in countriesList" :key="index" :value="country.name">
        {{ country.name }}
      </option>
    </select>

    <!-- Clear Button -->
    <button class="button is-small is-outlined is-danger" @click="clearCountry" type="button">
      Clear
    </button>
  </div>
</div>
      </row>
      <br>
      <br>
      <br>
    <div class="table-container">
        <table class="table is-fullwidth">
          <thead>
            <tr class="hasbg-color">
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Continent</th>
              <th>Flag</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="(data, index) in filteredCountries" v-bind:key="index">
                <td>{{ index + 1 }} </td>
                <td>{{ data.name }}</td>
                <td>{{ data.continent }}</td>
                <td><img :src="data.flag" class="img-fluid rounded-start" alt="not found" width="100" height="50"></td>
                <td>{{ data.rank }}</td>
              </tr>
          </tbody>
        </table>
      </div>
        <!--modal starts -->
    <div class="modal" :class="{'is-active' :isFilterModalActive}">
      <div class="modal-background"></div>
      <div class="modal-card">
          <header class="modal-card-head">
             <h1 class="modal-card-title"><strong style="color:white !important"> Add New Country Details: </strong></h1>
            <button class="delete" type="button" @click="isFilterModalActive = !isFilterModalActive"></button>
          </header>
          <div class="modal-card-body is-paddingless" style="flex-grow: inherit !important;">
            <div class="columns is-marginless">
              <div  class="column is-1"> </div>
                <div class="column is-5">
                  <label class="label">Country Name<span class="custom-danger">*</span> :-</label>
                  <div class="control is-fullwidth">
                    <p class="control">
                      <input class="input" type="text" placeholder="Enter Country Name" required v-model="user.countryName" @input="validateCountryName">
                    </p>
                    <p v-if="errors.countryName" class="custom-danger">{{ errors.countryName }}</p>
                  </div>
                </div>
                <div class="column is-5">
                  <label class="label">Image<span class="custom-danger">*</span> :-</label>
                  <div class="control is-fullwidth">
                    <div class="has-text-left">
                      <b-field>
                        <label class="file-label">
                          <input id="csvInput" class="file-input" type="file" @change="prepareFileToUpload" required>
                          <span class="file-cta">
                            <span class="file-icon">
                              <i class="fas fa-cloud-upload-alt"></i>
                            </span>
                            <span class="file-label" v-if="!fileName">Upload Image</span>
                            <span v-if="fileName">{{ fileName.substring(0, 20) }}</span>
                          </span>
                        </label>
                      </b-field>
                    </div>

                  </div>
                </div>
              </div>
              <div class="columns is-marginless">
                <div  class="column is-1"> </div>
                <div class="column is-5">
                  <label class="label">Continent<span class="custom-danger">*</span> :-</label>
                  <div class="control is-fullwidth">
                    <p class="control">
                      <select v-model="continent" class="custom-modal-dropdown">
                        <option value="">Select Country</option>
                        <option v-for="(continent, index) in continentList" :key="index" :value="continent.continent">
                          {{ continent.continent }}
                        </option>
                      </select>
                    </p>
                    <p v-if="errors.continent" class="custom-danger">{{ errors.continent }}</p>
                  </div>
                </div>
                <div class="column is-5">
                  <label class="label">Rank<span class="custom-danger">*</span> :-</label>
                  <div class="control is-fullwidth">
                    <p class="control">
                      <input class="input" type="text" placeholder="Enter Rank" required v-model="user.rank" @input="validateRank">
                    </p>
                    <p v-if="errors.rank" class="custom-danger">{{ errors.rank }}</p>
                  </div>
                </div>
              </div>
            </div>
          <footer class="modal-card-foot">
            <div class="has-text-right is-pulled-right">
              <span class="buttons has-text-right">
                <button type="submit" class="button has-text-weight-medium is-outlined is-black" @click.prevent="submitDetails" name="button" :disabled="disableApplyBtn">Apply</button>
                <button type="submit" class="button has-text-weight-medium is-outlined is-danger" @click.prevent="resetDetails" name="button">Reset</button>
              </span>
            </div>
          </footer>
        </div>
      </div>
      <!--modal end -->
  </div>
</template>
<script>
// import CONSTANTS from '@/utils/constants';
// import STORAGE from '@/storage';
let invoiceFile = null;
export default {
  name: 'Login',
  props: ['userid'],
  data: () => {
    return {
      user: {
        countryName: '',
        rank: ''
      },
      continent: '',
      fileName: '',
      isFilterModalActive: false,
      countryListData: [],
      continentList: [],
      country: '', // Selected country
      errors: {
        countryName: '',
        image: '',
        continent: '',
        rank: ''
      }
    };
  },
  computed: {

    filteredCountries () {
      if (!this.country) {
        return this.countryListData; // Return all countries if no country is selected
      }
      return this.countryListData.filter(country => country.name === this.country);
    },
    countriesList () {
      return this.countryListData; // Return the full list of countries for the dropdown
    },
    disableApplyBtn () {
      return this.continent === '' || this.fileName === '' || this.user.countryName === '' || this.user.rank === '';
    }
  },
  created () {
    this.getCountriesListData();
    this.allCountriesList();
    this.getContinentDataList();
  },
  methods: {
    validateCountryName () {
      if (this.user.countryName.length < 3 || this.user.countryName.length > 20) {
        this.errors.countryName = 'Country name must be between 3 and 20 characters';
      } else {
        this.errors.countryName = '';
      }
      this.checkIfFormIsValid();
    },

    validateContinent () {
      if (!this.continent) {
        this.errors.continent = 'Continent is required';
      } else {
        this.errors.continent = '';
      }
      this.checkIfFormIsValid();
    },

    validateRank () {
      const rankValue = parseInt(this.user.rank, 10);
      if (isNaN(rankValue)) {
        this.errors.rank = 'Rank must be a number';
      } else {
        this.errors.rank = '';
      }
      this.checkIfFormIsValid();
    },

    checkIfFormIsValid () {
      this.disableApplyBtn = !!(
        this.errors.countryName || this.errors.image || this.errors.continent || this.errors.rank || !this.user.countryName || !this.continent || !this.file || !this.user.rank
      );
    },

    // toggle filter modal
    toggleFilterModal: async function () {
      this.resetDetails();
      this.isFilterModalActive = !this.isFilterModalActive;
    },

    // get all country list data
    async getCountriesListData () {
      try {
        const { data } = await http.get('http://localhost:8080/api/v1/myproject/getCountriesData');
        if (data) {
          this.countryListData = data.result;
        }
      } catch (error) {
        return this.$buefy.snackbar.open({
          duration: 2000,
          message: error.message,
          type: 'is-danger'
        });
      }
    },

    // get all continent list

    async getContinentDataList () {
      try {
        const { data } = await http.get('http://localhost:8080/api/v1/myproject/getContinentList');
        if (data) {
          this.continentList = data.result;
        }
      } catch (error) {
        return this.$buefy.snackbar.open({
          duration: 2000,
          message: error.message,
          type: 'is-danger'
        });
      }
    },

    // submit details
    submitDetails: async function () {
      this.user.invoiceFile = this.fileName;
      try {
        const formData = new FormData();
        if (this.userid !== undefined) {
          formData.set('id', this.userid);
          formData.append('file', invoiceFile);
        } else {
          formData.append('file', invoiceFile);
        }
        formData.set('countryName', this.user.countryName);
        formData.set('continent', this.continent);
        formData.set('rank', this.user.rank);
        console.log(formData, 'formData');
        const { data } = await http.post('http://localhost:8080/api/v1/myproject/addCountriesData', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(data, 'datattt dattt');
        if (data.result === 'Record saved successfully') {
          this.isFilterModalActive = false;
          this.getCountriesListData();
          this.$buefy.snackbar.open({
            duration: 2000,
            message: 'Details are saved successful',
            type: 'is-success'
          });
        }

        if (data.message === 'Country name must be unique.') {
          this.$buefy.snackbar.open({
            duration: 2000,
            message: 'Country name must be unique.',
            type: 'is-success'
          });
        }

        if (data.message === 'Continent name must be unique.') {
          this.$buefy.snackbar.open({
            duration: 2000,
            message: 'Continent name must be unique.',
            type: 'is-success'
          });
        }
      } catch (error) {
        console.log(error, 'errrrrrrrrrrrr');
        return this.$buefy.snackbar.open({
          duration: 2000,
          message: error.message,
          type: 'is-danger'
        });
      }
    },

    // prepared for file upload
    prepareFileToUpload: function (e) {
      const loadingComponent = this.$buefy.loading.open();

      try {
        const file = e.target.files[0]; // file details
        this.fileName = e.target.files[0].name; // return file name
        console.log(this.fileName, 'fileNameaaaaaaaaaaa');
        if ((this.fileName.split('.').pop().toLowerCase() !== 'png') && (this.fileName.split('.').pop().toLowerCase() !== 'jpg')) {
          loadingComponent.close();
          return this.$buefy.dialog.alert({
            message: 'File with extension .' + this.fileName.split('.').pop() + ' is not allowed. Please upload a file with .jpg extension.',
            type: 'is-danger',
            confirmText: 'Close'
          });
        }

        // Validate file size (less than 4MB)
        const maxSizeInBytes = 4 * 1024 * 1024; // 4MB
        if (file.size > maxSizeInBytes) {
          loadingComponent.close();
          return this.$buefy.dialog.alert({
            message: 'File size exceeds 4MB. Please upload a smaller file.',
            type: 'is-danger',
            confirmText: 'Close'
          });
        }

        invoiceFile = file;
        loadingComponent.close();
        return this.$buefy.toast.open({
          duration: 3000,
          message: 'file uploaded successfully.',
          type: 'is-success'
        });
      } catch (e) {
        loadingComponent.close();
        return this.$buefy.toast.open({
          duration: 3000,
          message: e.message,
          type: 'is-danger'
        });
      }
    },

    // get all country list
    async allCountriesList () {
      try {
        const { data } = await http.get('http://localhost:8080/api/v1/myproject/getCountriesList');
        if (data) {
          this.countriesList = data.result;
        }
      } catch (error) {
        return this.$buefy.snackbar.open({
          duration: 2000,
          message: error.message,
          type: 'is-danger'
        });
      }
    },

    // reset the details
    resetDetails () {
      this.user = {};
      this.continent = '';
      this.fileName = '';
    },

    clearCountry () {
      this.country = ''; // Clear the selected country
    }
  }
};
</script>
<style scoped>
.select-with-clear {
  display: flex;
  align-items: center;
}

.select-with-clear select {
  margin-right: 10px;
}

.custom-select-height {
  height: 26px !important;
}
.custom-modal-dropdown {
  height: 35px !important;
}
.select-with-clear {
  height: 35px !important;
}

.custom-danger {
    margin: 0;
  padding: 0;
  color: red;
  }
</style>
