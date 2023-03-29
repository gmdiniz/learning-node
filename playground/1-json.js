const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const jsonBuffer = fs.readFileSync('1-json.json')
let dataJSON = JSON.parse(jsonBuffer.toString()) 

dataJSON.name = 'Gabriel Diniz'
dataJSON.age = 22

const data = JSON.stringify(dataJSON)
fs.writeFileSync('1-json.json', data)
