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
     * Gets a book with the given id
     * @param {string} id - The book's identifier.
     * @returns {Book}
     */
    getBook(id) {
        return Book.findById(id)
    },

    /**
     * Get all books or only the books from the author with the given id
     * according to whether or not there is a supplied authorId.
     * @param {string} authorId - The author's identifier. Optional
     * @returns {[Book]}
     */
    getBooks(authorId) {
        return !authorId
            ? Book.find({})
            : Book.find({ authorId })
    },

    /**
     * Gets a author with the given id
     * @param {string} id - The author's identifier.
     * @returns {Author}
     */
    getAuthor(id) {
        return Author.findById(id)
    },

    /**
     * Get all authors
     * @returns {[Author]}
     */
    getAuthors: () => Author.find({}),

    /**
     * Adds an author document to the database with the given name and age.
     * @param {string} name - The name of the author
     * @param {Number} age - The age of the author
     * @returns {Author} The author object that was saved on the database
     */
    addAuthor(name, age) {
        return new Author({ name, age }).save()
    },

    /**
     * Adds a book document to the database, associated to an author.
     * @param {string} title - The title of the book
     * @param {string} genre - The genre of the book
     * @param {string} authorId - The author's identifier
     * @returns {Author} The author object that was saved on the database
     */
    addBook(title, genre, authorId) {
        return new Book({ title, genre, authorId }).save()
    }
}