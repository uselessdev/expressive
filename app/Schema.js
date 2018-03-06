const graphql = require('graphql')
const {
  GraphQLSchema
} = graphql

const RootQuery = require('./RootQuery')

module.exports = new GraphQLSchema({
  query: RootQuery
})
