var Book = (function() {
    // Private static attributes.
    var constants = {
        UPPER_BOUND: 100,
        LOWER_BOUND: -100
    };
    // Private static attributes.
    var numOfBook = 0;
    // Private static method.
    function checkIsbn() {
        // TODO ...
    };
    // Return the contructor.
    return function(newIsbn, newTitle, newAuthor) { // implements Publication
        // Private attributes.
        var isbn, title, author;
        // Privileged methods.
        // Privileged methods.
        this.getIsbn = function() {
            return isbn;
        };
        this.setIsbn = function(newIsbn) {
            if (!checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN.');
            isbn = newIsbn;
        };
        this.getTitle = function() {
            return title;
        };
        this.setTitle = function(newTitle) {
            title = newTitle || 'No title specified';
        };
        this.getAuthor = function() {
            return author;
        };
        this.setAuthor = function(newAuthor) {
            author = newAuthor || 'No author specified';
        };
        // Privileged static method.
        this.getConstant(name) {
            return constants[name];
        };
        // Constructor code.
        numOfBooks++; // Keep track of how many Books have been instantiated
        // with the private static attribute.
        if (numOfBooks > 50) throw new Error('Book: Only 50 instances of Book can be ' + 'created.');
        this.setIsbn(newIsbn);
        this.setTitle(newTitle);
        this.setAuthor(newAuthor);
    }
})();

// Public static method.
Book.convertToTitleCase = function(inputString) {
    // TODO ...
};

// Public, non-privileged methods.
Book.prototype = {
    display: function() {
        // TODO ...
    }
};

/* Inheritance */
/* Class Person. */
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
};
/* The Prototype Chain  */
