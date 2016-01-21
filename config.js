/**
 *  A module that contains all the configuration needed
 *  @module config.js
 */

 /** Initially contains database configuration */
export default {
    db: {
        client: 'mysql',
        connection: : {
            host: '127.0.0.1',
            user: 'db_username',
            password: 'db_password',
            database: 'db_name',
            'charset': 'utf8'
        }
    }
};