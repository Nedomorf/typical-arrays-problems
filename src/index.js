exports.min = function min(array) {
    let res = 0;
    if (array && array.length > 0) res = Math.min(...array);
    return res;
}

exports.max = function max(array) {
    let res = 0;
    if (array && array.length > 0) res = Math.max(...array);
    return res;
}

exports.avg = function avg(array) {
    let sum = 0;
    if (array && array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
    }
    let res = 0;
    if (sum !== 0) res = (sum / array.length);
    return res;
}
