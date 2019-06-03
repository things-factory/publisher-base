import { gql } from 'apollo-server-koa'

export const PublisherPatch = gql`
  input PublisherPatch {
    name: String
    description: String
  }
`
