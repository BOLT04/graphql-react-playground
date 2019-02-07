/**
 * A module that keeps the data in memory. Mocks the fetching operation that would be done
 * when using a database.
 */

const books = [
    {
        id: '1',
        name: 'Book 1',
        genre: 'Sci-fi'
    },
    {
        id: '2',
        name: 'Book 2',
        genre: 'Fantasy'
    },
    {
        id: '3',
        name: 'Book 3',
        genre: 'Horror'
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
     * Gets a author with the given id
     * @param {string} id - The author's identifier.
     * @returns {Author}
     */
    getAuthor(id) {
        return authors.find(a => a.id === id)
    }
}