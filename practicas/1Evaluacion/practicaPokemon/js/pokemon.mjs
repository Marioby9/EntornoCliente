
const BASEURL = 'https://pokeapi.co/api/v2/pokemon'

const howManyPokemons = async () => {
    try {
        const response = await axios.get(BASEURL)
        return response.data.count
      } catch (error) {
        console.log(error)
      }
}

const getAllPokemons = async () => {
  try { 
    const numTotal = await howManyPokemons()
    const response = await axios.get(`${BASEURL}?limit=${numTotal}`)
    return response.data.results
  } catch (error) {
    console.log(error)
  }
}

export const getUrlbyName = async (name) => {
    const allPokemons = await getAllPokemons()
    const pokemon = allPokemons.find(elm => elm.name === name)
    return pokemon ? pokemon.url : null 
}

export const getPokemonData = async (url) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.log(error)
  }
}



export const getLimitedPokemons = async (limit) => {
  try { 
    const response = await axios.get(`${BASEURL}?limit=${limit}`)
    return response.data.results
  } catch (error) {
    console.log(error)
  }
}