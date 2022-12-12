const numbersForReduce = [62,83,30,25,20]

const reduceCallBack = (element, sumElement, i, array) => {
    return sumElement
}

const reduce = (array, callback, value) => {
    value = 0
    let newValue = 0
    let element = 0

    for(let i = 0; i < array.length; i++){
        const sum = array[i]
        newValue = newValue + callback(element, sum, i, array)
         
    }
    return newValue
}
console.log(reduce(numbersForReduce, reduceCallBack, 0))

