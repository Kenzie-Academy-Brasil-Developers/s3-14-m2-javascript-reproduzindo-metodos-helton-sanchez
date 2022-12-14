const arrayNumber = [-2, 39, -31, 41, -11, 28, 41, 41]

function callBackMap(element, i, array) {
    return element * -1
};

function methodMap(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray
}
console.log(methodMap(arrayNumber, callBackMap))

