function Dino(species, dinoDiet, dinoHeight, dinoWeight, when, where, fact) {
    this.species = species
    this.dinoDiet = dinoDiet
    this.dinoHeight = dinoHeight
    this.dinoWeight = dinoWeight
    this.when = when
    this.where = where
    this.fact = fact
        // compare the difference in height of dino and human. Human height converted using equation
    this.compareHeight = function(humanFeet, humanInches) {
            totalHeight = Number(humanFeet * 12) + Number(humanInches)
            heightDiff = dinoHeight - totalHeight
            return `There's a ${heightDiff} inch difference between you and this dinosaur!`
        }
        // compare weight of dino and human then return a comment about that weight
    this.compareWeight = function(humanWeight) {
            weightDiff = Number(dinoWeight) - Number(humanWeight)
            return `There's a ${Math.abs(weightDiff)} pound difference between you and this dinosaur!`
        }
        // compare diet of dino and human. then return one of two different comments.
    this.compareDiet = function(humanDiet) {
        if (dinoDiet == humanDiet.toLowerCase()) { //convert capitals to all lower case
            let result = 'You both eat the same types of food!'
            return result
        } else {
            let result = ` This Dino is a ${dinoDiet}!`
            return result
        }
    }
}
// Creating Dino Array function to be called during button click
function getDinoArray(dinos) {
    dinoArray = []
    dinos.forEach((dino) => {
        newDinoObject = new Dino(dino.species, dino.diet, dino.height, dino.weight, dino.when, dino.where, dino.fact)
        dinoArray.push(newDinoObject)
    });
    return dinoArray
}
//Human Object function with properties to match the form data
function Human(species, humanDiet, humanWeight, humanFeet, humanInches, fact) {
    this.species = species
    this.humanDiet = humanDiet
    this.humanWeight = humanWeight
    this.humanFeet = humanFeet
    this.humanInches = humanInches
    this.fact = fact
}
// Fetch Dinosaur data from json file
fetch('dino.json')
    .then(response => response.json())
    .then(data => {
        getDinoArray(data.Dinos) //passing array into function
    })
    .catch(error => console.log(`There was a data fetch error: ${error}`));


// IIFE to retrieve human data
function getHumanData() {
    return (function() {
        humanName = document.querySelector('#name').value;
        species = "Human"
        humanDiet = document.querySelector('#diet').value;
        humanWeight = document.querySelector('#weight').value;
        humanFeet = document.querySelector('#feet').value;
        humanInches = document.querySelector('#inches').value;
        fact = " "
            //new human object
        const human = new Human(species, humanDiet, humanWeight, humanFeet, humanInches, fact)
        return human
    })();
}
// generate dino tiles with info pulled from json file
function generateTiles(animalObject, human) {
    animalObject.splice(4, 0, human)
    for (let i = 0; i < 9; i++) {
        creature = animalObject[i]
        let tDiv = document.createElement('div')
        tDiv.className = 'grid-item'
            // creating tag for the tile
        if (i === 4) {
            creature.species = document.querySelector('#name').value
            humanDiet = document.querySelector('#diet').value
            humanFeet = document.querySelector('#feet').value
            humanInches = document.querySelector('#inches').value
            humanWeight = document.querySelector('#weight').value
            let tile = document.createElement("h2")
            tile.innerHTML = `<h3>${creature.species}</h3>
                    <img src="images/human.png" alt = "picture of ${creature.species}"/>`
            tDiv.appendChild(tile)
        } else if (i === 8) {
            let tile = document.createElement("h2")
            tile.innerHTML = `<h3>${creature.species}</h3>
                <img src="images/${creature.species.toLowerCase()}.png" alt = "picture of ${creature.species}"/>
                <h3>${creature.fact}</h3>`
            tDiv.appendChild(tile)
        } else {
            //generates a random fact and renders in each tile
            const factNumber = Math.floor(Math.random() * 4) // random number
            let cCompD = creature.compareDiet(human.humanDiet)
            let cCompW = creature.compareWeight(human.humanWeight)
            let cCompH = creature.compareHeight(human.humanFeet, human.humanInches)
            let genericFact = creature.fact
            facts = [genericFact, cCompD, cCompW, cCompH]
            let tile = document.createElement("h2")
            tile.innerHTML = `<h3>${creature.species}</h3>
                    <img src="images/${creature.species.toLowerCase()}.png" alt = "picture of ${creature.species}"/>
                    <h3>${facts[factNumber]}</h3>`
            tDiv.appendChild(tile)
        }
        // create the element on the page
        document.querySelector("#grid").appendChild(tDiv)
    }
}
// remove form
function removeForm() {
    document.querySelector("#dino-compare").style.display = 'none'
}
// On button click, prepare and display tiles
let button = document.querySelector("#btn")
button.addEventListener("click", function() {
    getHumanData()
    removeForm()
    generateTiles(dinoArray, getHumanData())
})