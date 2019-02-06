const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./model/schema')

// CONSTANTS
const DEFAULT_PORT = 3000
const PORT = process.env.PORT || DEFAULT_PORT

const app = express()
// Setup middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, onListen)

function onListen() {
    console.log(`Server listening on port: ${PORT}. http://localhost:${PORT}`)
}