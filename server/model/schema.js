/**
 * This module describes the data model on the graph (object types) and 
 * the relationships between those types.
 */

const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString } = graphql

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
