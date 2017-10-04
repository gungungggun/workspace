Object.defineProperty(Object.prototype, "forIn", {
  value: function(fn, self) {
    self = self || this

    Object.keys(this).forEach(function(key, index) {
      var value = this[key]
      fn.call(self, key, value, index)
    }, this)
  }
})

function update(table, key, obj) {
  let update = {
    TableName: table,
    Key: key,
    ExpressionAttributeNames: {},
    ExpressionAttributeValues: {},
    UpdateExpression: ''
  }

  obj.forIn((k, v, i) => {
    if (v !== '') {
      update.ExpressionAttributeNames['#' + k] = k
      update.ExpressionAttributeValues[':' + k] = v
      if (update.UpdateExpression === '') {
        update.UpdateExpression = 'SET '
      }
      update.UpdateExpression += '#' + k + ' = ' + ':' + k + ','
    }
  })

  if (update.UpdateExpression.length > 0) {
    update.UpdateExpression = update.UpdateExpression.slice(0, -1)
  }

  return update
}

let obj = {
  name: 'foo bar',
  hobby: 'program',
  message: ''
}

let table = 'test'

let key = {
  id: 'dsdsasa'
}

update(table, key, obj)
