import { getUrlbyName, getPokemonData } from "./pokemon.js";

//

const $inputSearch = document.getElementById("inputSearch")
const $btnSearch = document.getElementById("btnSearch")
const $pokemonCont = document.querySelector('.pokemon')
const $noDataFound = document.querySelector('.noDataFound')

//

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



$btnSearch.addEventListener("click", async () => {
    const url = await getUrlbyName($inputSearch.value.toLowerCase())
    if(url){
        const pokemon = await getPokemonData(url)
        paintElement(pokemon)

        $pokemonCont.style.display = "flex"
        $noDataFound.style.display = "none"
    }
    else{
        $pokemonCont.style.display = "none"
        $noDataFound.style.display = "flex"
    }
    
})

