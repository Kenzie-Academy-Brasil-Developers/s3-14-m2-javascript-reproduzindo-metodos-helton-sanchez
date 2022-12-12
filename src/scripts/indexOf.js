const numbersIndexOf = [-3, 0, 4, -18, 25, 32]

function find (element){
    return element %2 === 0 && element > 0
}

function findIndex (array, callBack){
    const index = []

    for(let i = 0; i < array.length; i++){
        if(callBack(array[i], i, array)){
            index.push(i)
            return index
        }
    }
    return 'Item not found'
}
console.log(findIndex(numbers, find));