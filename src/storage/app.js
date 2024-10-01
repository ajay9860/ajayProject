export default class App {
  constructor (db) {
    this.db = db;
  }

  async init () {
    if (!this.db) return new Error('Could not get DB');
  }
}
