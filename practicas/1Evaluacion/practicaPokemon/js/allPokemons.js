import {getPokemonData, getLimitedPokemons } from "./pokemon.js"



//
const $pokemonCont = document.querySelector('.pokemonData')
const $noDataFound = document.querySelector('.noDataFound')
const $allPokeCont = document.querySelector(".allPokeCont")

//

const paintPokeCard = (pokemon) => {
    const card = document.createElement("div")
    card.dataset.url = pokemon.url
    card.className = "pokemon"
    card.innerHTML = `
        <p>${pokemon.name}</p>
    `
    
    $allPokeCont.append(card)
    
    card.addEventListener("click", async (e) => {

        //SI PINCHAMOS EN EL P, COGE EL DATASET DEL PADRE. SI PINCHAMOS EN EL CONTAINER, COGEMOS SU DATASET
        //ES NECESARIO PORQUE SINO, DA ERROR AL NO TENER DATASET EL PARRAFO
        const url = e.target.tagName.toLowerCase() == "p" ? e.target.parentNode.dataset.url : e.target.dataset.url
        const pokeElement = await getPokemonData(url)

        
        $pokemonCont.style.display = "flex"
        $noDataFound.style.display = "none"
        paintElement(pokeElement)
    })
}

const paintElement = async (pokemon) => {
    $pokemonCont.innerHTML = `
    <div class="pokeHeader">
        <img src="${pokemon.sprites.front_default}" alt="">
        <h1>${pokemon.name}</h1>
    </div>
    <div class="data">
        <div class="dataLeft">
            <p>Tipo: ${pokemon.types[0].type.name}</p>
            <p>Altura: ${pokemon.height}</p>
            <p>Peso: ${pokemon.weight}</p>
            <p>Movimientos: ${pokemon.moves[0].move.name} </p>
        </div>
        <div class="dataRight">
            <p>Habilidades: ${pokemon.abilities[0].ability.name} </p>
            <p>Formas posibles: ${pokemon.forms[0].name} </p>
            <p>Experiencia Base: ${pokemon.base_experience} </p>
            <p>ID: ${pokemon.id} </p>
        </div>
    </div>
    `
}



const allPokemons = await getLimitedPokemons(20)

allPokemons.forEach(pokemon => paintPokeCard(pokemon))