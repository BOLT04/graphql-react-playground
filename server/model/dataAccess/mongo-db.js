/**
 * Module that communicates with the MongoDb database
 */

const { Book, Author } = require('../mongodb/db-schema')

//TODO: improve this! I just dont think the connection or dependency of mongoose should be in the server!
module.exports = {
    connect() {
        const mongoose = require('mongoose')

        //TODO: Later one change this connection string to be easily configured and not be on the code.
        //TODO: This way the code doesn't need to be re-deployed when changing user and adds security!
        //TODO: possible solution: env variables; json config file
        mongoose.connect('mongodb://Admin:pass123@ds127545.mlab.com:27545/graphql-react-playground')
        mongoose.connection.once('open', () => {
            console.log('Connected to the MongoDb database')
        })
    },
    
    /**
     * Adds an author document to the database with the given name and age.
     * @param {string} name - The name of the author
     * @param {Number} age - The age of the author
     * @returns {Author} The author object that was saved on the database
     */
    addAuthor(name, age) {
        return new Author({ name, age }).save()
    }
}