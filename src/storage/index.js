import Dexie from 'dexie';
import App from './app';
import User from './user';

const db = new Dexie('customs');

db.version(1).stores({
  keyvalues: '&key'
});

let storage = null;
if (!storage) {
  storage = {
    app: new App(db),
    user: new User(db)
  };
}

export default storage;
