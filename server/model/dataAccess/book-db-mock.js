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

module.exports = {
    /**
     * Gets a book with the given id
     * @param {string} id - The book's identifier.
     * @returns {Book}
     */
    getBook(id) {
        return books.find(b => b.id === id)
    }
}