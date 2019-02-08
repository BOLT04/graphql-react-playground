/**
 * Module that communicates with the MongoDb database
 */
import mongoose from 'mongoose'

//TODO: Later one change this connection string to be easily configured and not be on the code.
//TODO: This way the code doesn't need to be re-deployed when changing user and adds security!
//TODO: possible solution: env variables; json config file
mongoose.connect('mongodb://Admin:pass123@ds127545.mlab.com:27545/graphql-react-playground')
mongoose.connection.once('open', () => {
    console.log('Connected to the MongoDb database')
})