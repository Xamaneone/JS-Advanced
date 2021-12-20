const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function(booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};

const {expect} = require("chai")

describe("Tests …", function () {
    describe("calcPriceOfBook", function () {
        it("correct values", function () {
            expect(library.calcPriceOfBook("test", 2020)).to.be.equal(`Price of test is 20.00`)
        });
        it("correct values with discount", function () {
            expect(library.calcPriceOfBook('test', 1800)).to.be.equal(`Price of test is 10.00`)
        });
        it("correct values with discount", function () {
            expect(library.calcPriceOfBook('test', 1800)).to.be.equal(`Price of test is 10.00`)
        });
        it("invalid inputs", function () {
            expect(library.calcPriceOfBook(123, 'asd')).to.throw(`Invalid input`)
        })
    });
    describe("findBook", function () {
        it("book in array", function () {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.be.equal("We found the book you want.")
        });
        it("book not in array", function () {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "test")).to.be.equal("The book you are looking for is not here!")
        });
        it("empty array", function () {
            expect(library.findBook([], "test")).to.throw("No books currently available")
        });
    });
    describe("arrangeTheBooks", function () {
        it("Negative number", function () {
            expect(library.arrangeTheBooks(-1)).to.throw(`Invalid input`)
        });
        it("string", function () {
            expect(library.arrangeTheBooks('test')).to.throw(`Invalid input`)
        });
        it("arrangeBooks", function () {
            expect(library.arrangeTheBooks(8)).to.be.equal("Great job, the books are arranged.")
        });
        it("arrangeBooksNotEnoughSpace", function () {
            expect(library.arrangeTheBooks(400)).to.be.equal("Insufficient space, more shelves need to be purchased.")
        });
    });

})

const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function(booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};

const {expect} = require("chai")

describe("Tests …", function () {
    describe("calcPriceOfBook", function () {
        it("correct values", function () {
            expect(library.calcPriceOfBook("test", 2020)).to.be.equal(`Price of test is 20.00`)
        });
        it("correct values with discount", function () {
            expect(library.calcPriceOfBook('test', 1800)).to.be.equal(`Price of test is 10.00`)
        });
        it("correct values with discount", function () {
            expect(library.calcPriceOfBook('test', 1800)).to.be.equal(`Price of test is 10.00`)
        });
        it("invalid inputs", function () {
            expect(library.calcPriceOfBook(123, 'asd')).to.throw(`Invalid input`)
        })
    });
    describe("findBook", function () {
        it("book in array", function () {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.be.equal("We found the book you want.")
        });
        it("book not in array", function () {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "test")).to.be.equal("The book you are looking for is not here!")
        });
        it("empty array", function () {
            expect(library.findBook([], "test")).to.throw("No books currently available")
        });
    });
    describe("arrangeTheBooks", function () {
        it("Negative number", function () {
            expect(library.arrangeTheBooks(-1)).to.throw("Invalid input")
        });
        it("string", function () {
            expect(library.arrangeTheBooks('test')).to.throw(`Invalid input`)
        });
        it("arrangeBooks", function () {
            expect(library.arrangeTheBooks(8)).to.be.equal("Great job, the books are arranged.")
        });
        it("arrangeBooksNotEnoughSpace", function () {
            expect(library.arrangeTheBooks(400)).to.be.equal("Insufficient space, more shelves need to be purchased.")
        });
    });

})