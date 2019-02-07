/**
 * This module describes the data model on the graph (object types) and 
 * the relationships between those types.
 */

const graphql = require('graphql')
const db = require('./dataAccess/db-mock')

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
} = graphql

// Build the type schema

const idType = { type: GraphQLID }

/* LEARNING NOTES
   When two types need to refer to each other, or a type needs to refer to
   itself in a field, we can use a function expression (or arrow function) 
   to supply the fields lazily.
*/
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: idType,
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
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: {
        id: idType,
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        // Example Query: book(id: '1') { name }
        book: { 
            type: BookType,
            args: { // Define the arguments that the client making the query needs to input
                id: idType
            },
            // info parameter contains the Abstract Syntax Tree bits associated to the request
            resolve: (parent, args, info) => db.getBook(args.id)
        },
        author: {
            type: AuthorType,
            args: { id: idType },
            resolve: (parent, args, info) => db.getAuthor(args.id)
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery
})