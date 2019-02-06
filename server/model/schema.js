/**
 * This module describes the data model on the graph (object types) and 
 * the relationships between those types.
 */

const graphql = require('graphql')
const bookDb = require('./dataAccess/book-db-mock')

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

// Build the type schema

/* When two types need to refer to each other, or a type needs to refer to
   itself in a field, we can use a function expression (or arrow function) 
   to supply the fields lazily.
*/
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
    /*
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    }
    */
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        // Example Query: book(id: '1') { name }
        book: { 
            type: BookType,
            args: { // Define the arguments that the client making the query needs to input
                id: { type: GraphQLString }
            },
            // info parameter contains the Abstract Syntax Tree bits associated to the request
            resolve(parent, args, info) {
                return bookDb.getBook(args.id)
            }
        },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
})