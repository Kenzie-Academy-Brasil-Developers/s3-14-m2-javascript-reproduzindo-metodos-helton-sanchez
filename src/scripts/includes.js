const pets = ['cachorro', 'gato', 'tartaruga', 'pássaro'];

const filterPets = (element) => {
    return !element.pets
}

function addPets (array, newPet){
    const incluse = []
    
    for (let i = 0; i < array.length; i++){
        if(filterPets(array[i])){
            incluse.push(array[i], newPet)
        }
    }
    return incluse
}
console.log(addPets(pets, "reptil"));
