/** @module dbconnect.js */

/** Gets the config.js */
const config = require('./config.js');

/** Use the db in the config.js */
const knex = require('knex')(config.db);

/** exports the knext to be used by models/collections */
export default knex;