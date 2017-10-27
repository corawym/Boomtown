import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers'; 


const typeDefs = ` 
  type Item {
    id: ID!
    title: String!
    description: String
    imageurl: String
    tags: [Tag]
    itemowner: User!
    created: String!
    borrower: User
  }

  type User {
    id: ID!
    email: String!
    fullname: String!
    bio: String
    owneditems: [Item]
    borroweditems: [Item]
  }

  type Tag {
    id:ID!
    title: String!
  }
  
  type Query {
    items: [Item]
    item(id: ID!): Item
    users: [User]
    user(id: ID!): User
    tags:[Tag]
    tag(id:ID!):Tag
  }

  type Mutation {
    addItem (
      title: String!
      description: String
      imageurl: String
      tags: [String]
      itemowner: ID!
    ): Item
  }
`

export default makeExecutableSchema ({
  typeDefs,
  resolvers,
});