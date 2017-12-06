const PouchDB = require('pouchdb')
const movies = new PouchDB('Movies')

movies
  .put({
    _id: 'test'
  })
  .then(res => {
    console.log(res)
  })
