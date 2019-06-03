import { gql } from 'apollo-server-koa'

export const Publisher = gql`
  type Publisher {
    id: String
    name: String
    domain: Domain
    description: String
  }
`
