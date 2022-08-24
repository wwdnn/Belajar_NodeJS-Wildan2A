const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
}

//Convert Javascript object to JSON String
const bookJSON = JSON.stringify(book)

//convert JSON to javascript object
const bookObject = JSON.parse(bookJSON)

console.log(bookObject)
