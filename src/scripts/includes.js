const pets = ['cachorro', 'gato', 'tartaruga', 'pássaro'];

function addPets (array, newPet){
    const incluse = []
    
    for (let i = 0; i < array.length; i++){
        if(array[i] !== pets){
            incluse.push(array[i], newPet)
        }
    }
    return incluse
}
console.log(addPets(pets, "reptil"));
