const pets = ['cachorro', 'gato', 'tartaruga', 'pássaro'];

function addPets (array, newPet){
    
    for (let i = 0; i < array.length; i++){
        if(array[i] === newPet){
            return true
        }
    }
    return false
}
console.log(addPets(pets, "reptil"));
