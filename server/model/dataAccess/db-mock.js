/**
 * A module that keeps the data in memory. Mocks the fetching operation that would be done
 * when using a database.
 */
function Book(id, title, genre, authorId) {
    this.id = id
    this.title = title
    this.genre = genre
    this.authorId = authorId
}
const books = [
    new Book(1, 'Book 1', 'Sci-fi', 1),
    new Book(2, 'Book 2', 'Fantasy', 2),
    new Book(3, 'Book 3', 'Horror', 3),
    new Book(4, 'Book 4', 'Horror', 3),
    new Book(5, 'The real Harry Potter', 'Magic', 3),
    new Book(6, 'Fast and Furious', 'Racing', 1)
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
     * @returns {[Book]}
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
    },

    /**
     * Get all authors
     * @returns {[Author]}
     */
    getAuthors: () => authors
}