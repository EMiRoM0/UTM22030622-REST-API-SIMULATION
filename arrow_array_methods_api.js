const books = require('./books.json');

//Format for the responses obviusly.
const formatResponse = (code,body,msg) => ({code,body,msg});

//Obtain a by the title or ISBN.
const getBook = (searchTerm) => {
    const foundBook = books.find(book => book.title === searchTerm || book.ISBN === searchTerm);
    if(foundBook){
        return formatResponse(200,foundBook,"Here is the book you were looking for!");
    }
    return formatResponse(404,null,"Ummm... I'm sorry, but I couldn't find the book you were looking for.");
};

//List of all the books.
const getBooks = () => formatResponse(200,books,"All of the books have been retrieved!");

//Add a new book!
const addBook = (newBook) => {
    books.push(newBook);
    return formatResponse(201,{newBook,books},"The new book has been added successfully");
};

//Remove a book by introducing the title or ISBN.
const removeBookByTitleOrISBN = (searchTerm) => {
    const index = books.findIndex(book => book.title === searchTerm || book.ISBN === searchTerm);
    if(index !== -1){
        const deletedBook = books.splice(index,1)[0];
        return formatResponse(200,{deletedBook,books},"The book has been removed");
    }
    return formatResponse(404,null,"The book you were looking for is not in the list");
};

//Filter the books by things as genre, author or publisher.
const filterBy = (property,searchTerm) => {
    const filteredBooks = books.filter(book => book[property] === searchTerm);
    return formatResponse(200,filteredBooks,"The filter has been applied");
};

//List of the books in a specific format.
const listBooks = () => {
    const formattedBooks = books.map(book => `${book.title} - ${book.author} - ${book.year}`);
    return formatResponse(200,formattedBooks,"Listed books");
};

//Books by a specific year.
const getBooksByYear = (year) => {
    const booksByYear = books.filter(book => book.year === year);
    return formatResponse(200,booksByYear,"Books by year");
};

//Availability of all the books of a genre.
const genreFullAvailability = (genre) => {
    const allAvailable = books.every(book => book.genre === genre && book.stock > 0);
    return formatResponse(200,{availability:allAvailable},"This genre is still available");
};

//Availability of at least one book of a genre.
const genrePartialAvailability = (genre) => {
    const partialAvailable = books.some(book => book.genre === genre && book.stock > 0);
    return formatResponse(200,{availability:partialAvailable},"You are fortunate, there is at least one book of that genre!");
};

//Count by genre, author or publisher
const countBy = (property) => {
    const count = books.reduce((acc,book) => {
        acc[book[property]] = (acc[book[property]] || 0) + 1;
        return acc;
    },{});
    return formatResponse(200,count,"Counted by the offered characteristics.");
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