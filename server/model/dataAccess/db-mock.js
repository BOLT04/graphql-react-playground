/**
 * A module that keeps the data in memory. Mocks the fetching operation that would be done
 * when using a database.
 */

const books = [
    {
        id: '1',
        name: 'Book 1',
        genre: 'Sci-fi',
        authorId: '1'
    },
    {
        id: '2',
        name: 'Book 2',
        genre: 'Fantasy',
        authorId: '2'
    },
    {
        id: '3',
        name: 'Book 3',
        genre: 'Horror',
        authorId: '3'
    },
    {
        id: '4',
        name: 'Book 4',
        genre: 'Horror',
        authorId: '3'
    },
    {
        id: '5',
        name: 'The real Harry Potter',
        genre: 'Magic',
        authorId: '3'
    },
    {
        id: '6',
        name: 'Fast and Furious',
        genre: 'Racing',
        authorId: '1'
    }
]

const authors = [
    {
        id: '1',
        name: 'Mister Promise',
        age: 13
    },
    {
        id: '2',
        name: 'Sir Loop',
        age: 18
    },
    {
        id: '3',
        name: 'Yieldan Torr',
        age: 29        
    }
]

module.exports = {
    /**
     * Gets a book with the given id
     * @param {string} id - The book's identifier.
     * @returns {Book}
     */
    getBook(id) {
        return books.find(b => b.id === id)
    },

    /**
     * Get all books or only the books from the author with the given id
     * according to whether or not there is a supplied authorId.
     * @param {string} authorId - The author's identifier. Optional
     * @returns {Book[]}
     */
    getBooks(authorId) {
        return !authorId
            ? books
            : books.filter(b => b.authorId === authorId)
    },

    /**
     * Gets a author with the given id
     * @param {string} id - The author's identifier.
     * @returns {Author}
     */
    getAuthor(id) {
        return authors.find(a => a.id === id)
    }
}