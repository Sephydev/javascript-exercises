const getTheTitles = function (books) {
    const booksTitle = books.map((book) => {
        return book.title;
    })

    return booksTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
