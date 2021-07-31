// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.dinoWeight = weight;
    this.dinoHeight = height;
    this.dinoDiet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}
// let url = "file:///Users/aaroncaldwell/Desktop/Javascript/dino.json"
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(error))
// const Triceratops = new Dino("Triceratops", 13000, 114, "herbivore", "North America", "Late Cretaceous", "First discovered in 1889 by Othniel Charles Marsh.")
// const TRex = new Dino("Tyrannosourus Rex", 11905, 144, "carnivore", "North America", "Late Cretaceous", "The largest known skull measures in at 5 feet long.")
// const Anklyosaurus = new Dino("Anlyosaurus", 10500, 55, "herbivore", "North America", "Late Cretaceous", "Anklyosaurus survived for approximately 135 million years.")
// const Brachiosaurus = new Dino("Brachiosaurus", 70000, 372, "herbavor", "North America", "Late Jurassic", "herbivore", "An asteroid was names 9954 Brachiosaurus in 1991.")
// const Stegosaurus = new Dino("Stegosaurus", 1160, 79, "Herbivore", "North America, Europe, Asia", "Late Jurasic to Early Cretaceous", "The Stegosaurus had between 17 and 22 separate plates and flat spines")
// const Elasmoaurus = new Dino("Elasmosaurus", 16000, 59, "carnivore", "North America", "late Cretaceous", "Elasmosaurus was a marine reptile first discovered in Kansas.")
// const Pteranodon = new Dino("Pteranodon", 44, 20, "carnivore", "North America", "Late Cretaceous", "Actually a flying reptile, the Pteranodon is not a dinosaur.")
// const Pigeon = new Dino("Pigeon", 0.5, 9, "herbivore", "World Wide", "Holocene", "All birds are living dinosaurs.")


// Create Human Object
function Human(name, feet, inches, weight, diet) {
    this.humanName = name;
    this.humanFeet = feet;
    this.humanInches = inches;
    this.humanWeight = weight;
    this.humanDiet = diet;
}
// Use IIFE to get human data from form
function getHumanData() {
    (function pullUserData() {
        humanName = document.querySelector('#name').value,
            humanFeet = document.querySelector('#feet').value,
            humanInches = document.querySelector('#inches').value,
            humanWeight = document.querySelector('#weight').value,
            humanDiet = document.querySelector('#diet').value
        const human = new Human(humanName, humanFeet, humanInches, humanWeight, humanDiet)
        console.log(human)
        return human

    })()
}
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareHeight(humanFeet, humanInches, dinoHeight) {
    return
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareWeight(humanWeight, dinoWeight) {
    return
}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareDiet(humanDiet, dinoDiet) {
    return
}

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen
function removeForm() {
    document.querySelector('#dino-compare').style.display = 'none'
}

// function makeTile() {
//     let tile_div = document.createElement('div')
//     tile_div.className = 'grid-item'

//     let textElement = document.createElement('h2')
//     tile_div.innerText = " "
//     tile_div.appendChild(textElement)

//     return document.getElementById("grid").appendChild(tile_div)
// }

// function generateTiles(dinoInfo, humanInfo) {
//     makeTile(Triceratops.species, Triceratops.fact)
//     makeTile(TRex.species, TRex.fact)
//     makeTile(Anklyosaurus.species, Anklyosaurus.fact)
//     makeTile(Brachiosaurus.species, Brachiosaurus.fact)
//     makeTile(getHumanData())
//     makeTile(Stegosaurus.species, Stegosaurus.fact)
//     makeTile(Elasmoaurus.species, Elasmoaurus.fact)
//     makeTile(Pigeon.species, Pigeon.fact)
//     makeTile(Pteranodon.species, Pteranodon.fact)
// }

// On button click, prepare and display infographic
let button = document.querySelector('#btn')

button.addEventListener('click', function() {
    removeForm()
    getHumanData()
        //generateTiles()
    console.log('click')
})