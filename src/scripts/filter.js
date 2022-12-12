const listCar = [
    {
        nome: "Fusca",
        fabricante: "Volkswagem"
    },
    {
        nome: "Gol",
        fabricante: "Volkswagem"
    },
    {
        nome: "Shelby 500",
        fabricante: "Ford"
    },
    {
        nome: "EcoSport",
        fabricante: "Ford"
    },
    {
        nome: "147",
        fabricante: "Fiat"
    },
    {
        nome: "Stilo",
        fabricante: "Fiat"
    },

];

const filtrarFabrica = (elemento) => {
    return elemento.fabricante === "Volkswagem"
}

function filter(array, callBack) {
    const newArray = []
    
    for (let i = 0; i < array.length; i++) {
        if (callBack(array[i], i, array)) {
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log(filter(listCar, filtrarFabrica));