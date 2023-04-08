import { knex as setupKnex } from 'knex'
// import { env } from './env'

export const config = {
  client: 'sqlite',
  connection: {
    filename: './db/banco.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
