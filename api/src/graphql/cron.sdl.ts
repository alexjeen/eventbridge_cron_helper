export const schema = gql`
  type Response {
    success: Boolean!
    message: String
  }

  type Mutation {
    validateCron(expression: String!): Response! @requireAuth
  }
`
