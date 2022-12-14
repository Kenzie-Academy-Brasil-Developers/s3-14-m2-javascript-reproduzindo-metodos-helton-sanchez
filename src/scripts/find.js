const numbers = [-3, 0, 4, -18, 25, 32]

function find (element){
    return element %2 === 0 && element > 0
}

function findPair (array, callBack){

    for(let i = 0; i < array.length; i++){
        if(callBack(array[i])){
            return array[i]
        }
    }
}
console.log(findPair(numbers, find));