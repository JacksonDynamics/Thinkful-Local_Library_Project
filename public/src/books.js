
//  const result = authors.find((author)=> author.id === id);
//  return result;
//}
function findAuthorById(authors, id) {
  let found = null;
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) found = author;
    }
    return found;
  }
  
  
  function findBookById(books, id) {
  //  const result = books.find((book)=> book.id===id);
  //  return result;
  //}
  
    let found = null;
      for (let book of books) {
      if (book.id === id) {
        found = book;
      return found;
      };
    }
  }
  
  function partitionBooksByBorrowedStatus(books) {
    const loaned=[],returned=[];
    for (let book of books) {
      if(book.borrows[0].returned===false) {
        loaned.push(book);
      } else {
        returned.push(book);
      }
    }
    return [loaned, returned];
  }
  
  function getBorrowersForBook(book, accounts) {
    const accountsById = accounts.reduce((acc, account) => {
      acc[account.id] = account;
      return acc;
    }, {});
  
  return book.borrows.map(({ id, returned }) => ({
     ...accountsById[id],
     returned,
    })).slice(0,10);
  }
  
  module.exports = {
    findAuthorById,
    findBookById,
    partitionBooksByBorrowedStatus,
    getBorrowersForBook,
  };