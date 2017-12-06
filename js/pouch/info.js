const PouchDB = require('pouchdb')
const movies = new PouchDB('Movies')

movies
 .info()
 .then((info) => {
   console.log(info)
 })
