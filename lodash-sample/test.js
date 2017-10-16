var _ = require('lodash')

//_.forEach([3,2,9,6],
//          function(elem) { console.log(elem);});

//_([3,2,9,6]).forEach(function(elem) { console.log(elem);})

var arr = _.map([3,2,9,6], elem => elem*2 );

_.forEach(arr, elem => console.log(elem));
