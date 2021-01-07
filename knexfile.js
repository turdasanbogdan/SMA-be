require('dotenv').config();

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: "./database.sqlite"
  },
  useNullAsDefault: true,
  seeds: {
    direcotry: './seeds',
  },
};
