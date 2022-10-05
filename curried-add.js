function curriedAdd(total) {
    let count = 0;
    if(total) {
        return function add() {
            count += total;
            return count;
        }
    }
    return count;
}

module.exports = { curriedAdd };
