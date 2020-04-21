const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('books.json');
const db = low(adapter);

//DB operations
//To retrive all items from books or cart based on data key
module.exports.getDbData = (dataKey) => {
    let data = db.get(dataKey).value();
    if(data != 'undefined' && data != null && data != '') {
        return data;
    } 
}

//To retrive the book details from DB (books or cart based on the datakey)
module.exports.getBook = (datakey, isbn) => {
    // Searching books for the isbn(book id)
    return db.get(datakey).find({ isbn: isbn }).value();
  }

  //To add the book to the cart
  module.exports.addBook = (dataKey, book) => {

    db.get(dataKey).push(book).write();
  }
//To remove the book from the cart
  module.exports.removeBook = (dataKey, book) => {

    db.get(dataKey).remove(book).write();
  }