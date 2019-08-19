import { client, gqlBuilder } from '@things-factory/shell'
import gql from 'graphql-tag'

export async function fetchPublisherList(listParam = {}) {
  const response = await client.query({
    query: gql`{
        publishers(${gqlBuilder.buildArgs(listParam)}) {
          items {
            id
            name
            description
            intervalExpr
            status
            apiUrl
            creator {
              id
            }
            updater {
              id
            }
            createdAt
            updatedAt
          }
          total
        }
      }
      `
  })

  return response.data
}

export async function fetchPublisher(id) {
  const response = await client.query({
    query: gql`
      query FetchPublisherById($id: String!) {
        publisher(id: $id) {
          id
          name
          description
          intervalExpr
          status
          apiUrl
          creator
          updater
          createdAt
          updatedAt
        }
      }
    `,
    variables: { id }
  })

  return response.data
}

export async function createPublisher(publisher) {
  /*
    input NewPublisher {
      name        : String!
      description : String
      model       : String!
      width       : Int
      height      : Int
      published   : Boolean
    }
    */

  var { name, description, intervalExpr, apiUrl } = publisher

  const response = await client.mutate({
    mutation: gql`
      mutation CreatePublisher($publisher: NewPublisher!) {
        createPublisher(publisher: $publisher) {
          id
          name
          description
          intervalExpr
          apiUrl
          updatedAt
        }
      }
    `,
    variables: {
      publisher: { name, description, intervalExpr, apiUrl }
    }
  })

  return response.data
}

export async function updatePublisher(publisher) {
  /*
    input PublisherPatch {
      name        : String
      description : String
      model       : String
      width       : Int
      height      : Int
      published   : Boolean
    }
    */
  var { id, name, description, intervalExpr, apiUrl } = publisher
  model = JSON.stringify(model)

  const response = await client.mutate({
    mutation: gql`
      mutation UpdatePublisher($id: String!, $patch: PublisherPatch!) {
        updatePublisher(id: $id, patch: $patch) {
          id
          name
          description
          intervalExpr
          status
          apiUrl
        }
      }
    `,
    variables: {
      id,
      patch: { name, description, intervalExpr, apiUrl }
    }
  })

  return response.data
}

export async function deletePublisher(id) {
  const response = await client.mutate({
    mutation: gql`
      mutation($id: String!) {
        deletePublisher(id: $id) {
          id
        }
      }
    `,
    variables: {
      id
    }
  })

  return response.data
}
