import { Publisher } from './publisher'
import { NewPublisher } from './new-publisher'
import { PublisherPatch } from './publisher-patch'
import { PublisherList } from './publisher-list'
import { Filter, Pagination, Sorting } from '@things-factory/shell'

export const Mutation = `
  createPublisher (
    publisher: NewPublisher!
  ): Publisher

  updatePublisher (
    id: String!
    patch: PublisherPatch!
  ): Publisher

  deletePublisher (
    id: String!
  ): Publisher

  publishPublisher (
    id: String!
  ): Publisher
`

export const Query = `
  publishers(filters: [Filter], pagination: Pagination, sortings: [Sorting]): PublisherList
  publisher(id: String!): Publisher
`

export const Types = [Filter, Pagination, Sorting, Publisher, NewPublisher, PublisherPatch, PublisherList]
