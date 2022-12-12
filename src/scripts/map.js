const arrayNumber = [-2, 39, -31, 41, -11, 28]

function callBackMap(element, index, array) {
    return element * -1
};

function methodMap(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log(methodMap(arrayNumber, callBackMap))