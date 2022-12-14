const numbersIndexOf = [-3, 0, 4, -18, 25, 32]


function findIndex (array, element){

    for(let i = 0; i < array.length; i++){
        if(element === array[i]){
            return i
        }
    }
    return -1
}
console.log(findIndex(numbersIndexOf, 4));