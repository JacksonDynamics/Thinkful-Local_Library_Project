function findAccountById(accounts, id) {
  let person = accounts.find((account) => account.id === id);
  return person
}

function sortAccountsByLastName(accounts) {
  const surname = accounts.sort((lastNameA, lastNameB) =>
  lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase() ? 1 : -1);
return surname;
}

function getTotalNumberOfBorrows(account, books) { 
  return books.reduce((acc, book) => { 
    //console.log("initial acc and book ", acc, book)

    const totalBorrows = book.borrows.reduce((borrowAcc, borrow) => { 
      //console.log("Secondary borrowAcc and borrow ", borrowAcc, borrow)

      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc; }, 0); 
      return acc + totalBorrows; }, 0); }

/*
function getTotalNumberOfBorrows(account, books) {
  let borrowed=0;
  // for (let i = 0; i < books.length; i++)  OR
  
  for (let book of books) {
    for (let borrows of book.borrows) {
      if(borrows.id === account.id) borrowed += 1
    }
  }
  return borrowed;
}
*/

function getBooksPossessedByAccount(account, books, authors) {
  
  const newArray =[];
  for (let book of books) { 
    for (let borrowed of book.borrows) {
      if (borrowed.returned === false && account.id === borrowed.id) {
        for (let author of authors) {
          if (book.authorId===author.id) {
            book.author= author

            newArray.push(book);  
          }
        }
      }
    }
  } 
  return newArray;
}

// const accountId = account.id;
// let possessedBooks =[]

// books.map((book) => {
//   const borrowArray = book.borrows;
//   borrowArray.map((borrow) => {
//     if (borrow.id === accountId && borrow.returned === false)
//       possessedBooks.push(book)  ;      
//     });
//   });
// }


/*
const accountId = account.id;
let possessedBooks = []
for (let book of books) {
  const borrowArray= book.borrows;
  for let borrow of borrowArray) {
    if(borrow.id === accountId && borrow.return)
  }
}
*/

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};