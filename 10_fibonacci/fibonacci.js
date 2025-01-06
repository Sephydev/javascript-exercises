const fibonacci = function (num) {
    let fibo = [0, 1];
    if (num >= 0) {
        for (let i = 2; i <= num; i++) {
            fibo.push(fibo[i - 2] + fibo[i - 1]);
        }
        return fibo[num];
    } else {
        return 'OOPS';
    }
};

fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
