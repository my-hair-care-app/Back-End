// Update with your config settings.
require('dotenv').config();

module.exports = {
	development: {
		client: 'pg',
		useNullAsDefault: true,
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: './database/migrations',
			tableName: "knex_migrations",
		},
		seeds: { directory: './database/seeds' },
	},

// module.exports = {
// 	development: {
// 		client: 'sqlite3',
// 		connection: {filename: './database/auth.db3'},
// 		useNullAsDefault: true,
// 		migrations: {
// 			directory: './database/migrations',
// 			tableName: 'dbmigrations'
// 		},
// 		seeds: {directory: './database/seeds'}
// 	},

	// staging: {
	//   client: 'postgresql',
	//   useNullAsDefault:true,
	//   connection: {
	//     database: 'my_db',
	//     user:     'username',
	//     password: 'password'
	//   },
	//   pool: {
	//     min: 2,
	//     max: 10
	//   },
	//   migrations: {
	//     tableName: 'knex_migrations'
	//   }
	// },

	production: {
		client: 'postgresql',
		connection: process.env.DATABASE_URL,
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: './database/migrations',
			tableName: 'knex_migrations'
		},
		seeds: {
			directory: './database/seeds'
		}
	}
};
