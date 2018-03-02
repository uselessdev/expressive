const graphql = require('graphql')
const BooksRepository = require('./repository')
const Author = require('../Authors/types')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql

const BookType = new GraphQLObjectType({
  name: 'BookType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    value: { type: GraphQLInt },
    author: {
      type: Author.Type,
      resolve: (parentValue) => parentValue.author
    }
  })
})

const Books = {
  type: new GraphQLList(BookType),
  resolve: () => BooksRepository.find().then(books => books.toJSON())
}

const Book = {
  type: BookType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve: (parentValue, { id }) =>
    BooksRepository.findOne(id).then(book => book.toJSON())
}

module.exports = {
  Book,
  Books
}
