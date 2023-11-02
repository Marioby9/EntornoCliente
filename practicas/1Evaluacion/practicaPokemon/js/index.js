import { getUrlbyName, getPokemonData } from "./pokemon.mjs";

//

const $inputSearch = document.getElementById("inputSearch")
const $btnSearch = document.getElementById("btnSearch")
const $pokemonCont = document.querySelector('.pokemon')
const $noDataFound = document.querySelector('.noDataFound')

//

const paintElement = (pokemon) => {
    $pokemonCont.innerHTML = `
    <div class="pokeHeader">
        <img src="${pokemon.sprites.front_default}" alt="">
        <h1>${pokemon.name}</h1>
    </div>
    <div class="data">
        <div class="dataLeft">
            <p>Tipo: ${pokemon.types}</p>
            <p>Altura: ${pokemon.height}</p>
            <p>Peso: ${pokemon.weight}</p>
            <p>Área de localización: </p>
            <p>Movimientos: </p>
        </div>
        <div class="dataRight">
            <p>Habilidades: </p>
            <p>Formas posibles:  </p>
            <p>Experiencia Base: </p>
            <p>Estadísticas: </p>
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

