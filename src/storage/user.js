// import CONSTANTS from '@/utils/constants';

export default class User {
  constructor (db) {
    this.db = db;
  }

  async init () {
    if (!this.db) return new Error('Could not get DB');

    try {
      const { value } = await this.db.keyvalues.where('key').equals('token').first();
      const { value: User } = await this.db.keyvalues.where('key').equals('me').first();
      this.token = value;
      this.user = User;
      this.checkAccess(this.user);
    } catch (e) {
      console.log('Authorization failed.', e);
    }
  }

  async refreshInfo () {
    try {
      const { value } = await this.db.keyvalues.where('key').equals('token').first();
      this.token = value;

      const { data } = await http.get('http://localhost:8080/api/v1/myproject/getUserDetails');
      if (data) {
        this.checkAccess(data);
        this.user = data;

        return this.db.keyvalues.put({
          key: 'me',
          value: data
        });
      }
    } catch (e) {
      console.log('Me authorization failed', e);
    }
  }

  async setToken (token) {
    console.log(token, 'token logged');
    this.token = token;
    return this.db.keyvalues.put({
      key: 'token',
      value: token
    });
  }

  clearToken (token) {
    return Promise.all[(this.db.keyvalues.delete('token'), this.db.keyvalues.delete('me'), this.db.keyvalues.delete('tokenmigration'), this.db.keyvalues.delete('memigration'))];
  }

  getToken () {
    return this.token;
  }

  getUser () {
    return this.user;
  }

  // Following is a temporary workaround, till role based access is implemented
  checkAccess (user) {
    if (user.superadmin) {
      this.access = true;
    } else {
      this.access = false;
    }
  }

  hasAccess () {
    return this.access;
  }
}
