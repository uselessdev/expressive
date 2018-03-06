const { GraphQLObjectType } = require('graphql')

const BookTypes = require('./Books/types')
const AuthorTypes = require('./Authors/types')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    book: BookTypes.Book,
    books: BookTypes.Books,
    author: AuthorTypes.Author
  })
})

module.exports = RootQuery
