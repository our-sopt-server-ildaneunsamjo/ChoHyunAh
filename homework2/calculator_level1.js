module.exports = {
    add: (...args) => {
        return args.reduce((a, b) => {
            return a + b;
        });
    },
    subtract: (...args) => {
        return args.reduce((a, b) => {
            return a - b;
        });
    },
    multiply: (...args) => {
        return args.reduce((a, b) => {
            return a * b;
        });
    },
    divide: (...args) => {
        return args.reduce((a, b) => {
            return a / b;
        });
    }
}

/*module.exports = {
    add : (a, b)=> {
        return a+b;
    },
    subtract : (a, b)=> {
        return a - b;
    },
    multiply : (a, b)=> {
        return a * b;
    },
    divide : (a, b)=> {
        return a / b;
    }
}*/

