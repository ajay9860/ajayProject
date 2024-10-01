/* eslint-disable camelcase */

const API_URL = 'http://localhost:9000';
const API_MIGRATION_URL = 'http://localhost:8082';
// const API_URL = 'https://stagecustom.ae1stcry.com';
// const API_MIGRATION_URL = 'https://stagecustom.ae1stcry.com';
// if (process.env.NODE_ENV === 'production') {
//   API_URL = 'https://custom.ae1stcry.com';
// } else if (process.env.NODE_ENV === 'test') {
//   API_URL = 'https://stagecustom.ae1stcry.com';
// } else {
//   API_URL = 'http://localhost:9000';
//   API_MIGRATION_URL = 'http://localhost:8082';
// }
// console.log(process.env, 'process.env process.env');
export default {
  API_URL,
  API_MIGRATION_URL
};
