const books=require('./books.json');

//Function to do a format of the responses
function formatResponse(code,body,msg){
    return {code,body,msg};
}

//With this function we can get a book by title or using the ISBN!
const getBook = function(searchTerm){
    const foundBook = books.find(book => book.title === searchTerm || book.ISBN === searchTerm);
    if(foundBook){
        return formatResponse(200,foundBook,"Here is the book you were looking for!");
    }
    return formatResponse(404,null,"Ummm... I'm sorry, but I couldn't find the book you were looking for.");
};

//With this function we can get all the books!
const getBooks = () => formatResponse(200,books,"All of the books have been retrieved!");

//With this you can add a new book
const addBook = (newBook) => {
    books.push(newBook);
    return formatResponse(201,{newBook,books},"The new book has been added successfully");
};

//Remove a certain book of the list by title or ISBN
const removeBookByTitleOrISBN = (searchTerm) => {
    const index = books.findIndex(book => book.title === searchTerm || book.ISBN === searchTerm);
    if(index !== -1){
        const deletedBook = books.splice(index,1)[0];
        return formatResponse(200,{deletedBook,books},"The book has been removed");
    }
    return formatResponse(404,null,"The book you were looking for is not in the list");
};

//Filter the books by genre, author or publisher
const filterBy = (property,searchTerm) => {
    const filteredBooks = books.filter(book => book[property] === searchTerm);
    return formatResponse(200,filteredBooks,"The filter has been applied");
};

//Show all the books in a specific format
const listBooks = () => {
    const formattedBooks = books.map(book => `${book.title} - ${book.author} - ${book.year}`);
    return formatResponse(200,formattedBooks,"Listed books");
};

//Obtains the books by a specific year.
const getBooksByYear = (year) => {
    const booksByYear = books.filter(book => book.year === year);
    return formatResponse(200,booksByYear,"Books by year");
};

//Check availability of all the books of a genre.
const genreFullAvailability = (genre) => {
    const allAvailable = books.every(book => book.genre === genre && book.stock > 0);
    return formatResponse(200,{availability:allAvailable},"This genre is still available");
};

//Check availability of at least one book of a genre.
const genrePartialAvailability = (genre) => {
    const someAvailable = books.some(book => book.genre === genre && book.stock > 0);
    return formatResponse(200,{availability:someAvailable},"You are fortunate, there is at least one book of that genre!");
};

//Count by genre, author or publisher
const countBy = (property,searchTerm) => {
    const count = books.filter(book => book[property] === searchTerm).length;
    return formatResponse(200,{count},"Counted");
};

//Exporting the functions.
module.exports = {
    
getBook,
getBooks,
addBook,
removeBookByTitleOrISBN,
filterBy,
listBooks,
getBooksByYear,
genreFullAvailability,
genrePartialAvailability,
countBy
};