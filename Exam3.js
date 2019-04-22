const jsonfile = require('jsonfile')
const file = '../data.json'
jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)
  for(let i = 0; i < obj.items.length; i++) {
    console.log(obj.items[i].fname + " " + obj.items[i].age);
  }
})