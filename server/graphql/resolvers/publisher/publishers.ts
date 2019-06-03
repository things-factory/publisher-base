import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Publisher } from '../../../entities'

export const publishersResolver = {
  async publishers(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Publisher).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
