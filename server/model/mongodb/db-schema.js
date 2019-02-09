const mongoose = require('mongoose')
const { Schema } = mongoose

// LEARNING NOTES: A Schema in MongoDb is the equivalent of a collection and it 
// defines the shape (fields/properties) of the documents within that collection
const bookSchema = new Schema({
    title:    String,
    genre:    String,
    authorId: String,
})
const authorSchema = new Schema({
    name: String,
    age:  Number,
})

// LEARNING NOTES: A model in MongoDb is the type that represents that schema, so that in our code
// we can create documents (instances of that type).

//TODO: Not sure if exporting an object with all models is better or if I should make a file
// for each model... but maybe that leads to duplicated code since all require mongoose... or
// just make all models export a function that receives that dependency (mongoose.Schema at the moment)
// and then its resolved. 
module.exports = {
    Book: mongoose.model('Book', bookSchema),
    Author: mongoose.model('Author', authorSchema)
}