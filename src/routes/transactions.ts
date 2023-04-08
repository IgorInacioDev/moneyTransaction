import { randomUUID } from 'crypto'
import { FastifyInstance } from 'fastify'
import knex from 'knex'
import { z } from 'zod'

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/transaction', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )

    console.log(title, amount, type)

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })
    return reply.status(201).send()
  })

  app.get('/hello', async () => {
    const tables = await knex('transactions').select('*')

    return tables
  })
}
