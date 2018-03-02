const graphql = require('graphql')
const AuthorRepository = require('./repository')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} = graphql

const Type = new GraphQLObjectType({
  name: 'AuthorType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
})

const Author = {
  type: Type,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve: (parentValie, { id }) =>
    AuthorRepository.findOne(id).then(author => author.toJSON())
}

module.exports = {
  Type,
  Author
}
