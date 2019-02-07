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
    GraphQLList,
} = graphql

// Build the type schema

const idType = { type: GraphQLID }

/* LEARNING NOTES
   When two types need to refer to each other, or a type needs to refer to
   itself in a field, we can use a function expression (or arrow function) 
   to supply the fields lazily. 
   This is NOT RELATED to GraphQL, it's about javascript and the fact that we don't have access
   to the variable, in this case, AuthorType when we try to access it, since its definition only comes
   after the definition of the variable BookType! With a function this is solved because by the time the fields
   funtion is called there is... 
*/
/*
console.log(num); // Returns undefined 
var num;
num = 6;
*/

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: idType,
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            /* LEARNING NOTES: 
               In this case this author query will be nested inside a book query, meaning that
               parent parameter will reference the book object => we can use the prop. authorID
            */
            resolve: parent => db.getAuthor(parent.authorId)
            /*
                PLEASE CHANGE THIS IN THE FUTURE!
                I dont like the fact that I need to know in this file what is in the parent object
                that comes from the db (data model?).. 
            */
        }
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
        age: { type: GraphQLInt },
        books: { 
            type: new GraphQLList(BookType),
            resolve: (parent, args, info) => db.getBooks(parent.id)
        },
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