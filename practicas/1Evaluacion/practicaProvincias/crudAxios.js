
export const BASEURL="http://localhost:3000"


export const obtenerDatos = async(url, tabla, campo, valor) => {
    try {
        const response = await axios.get(`${BASEURL}/${tabla}?${campo}=${valor}`)
        return response.data
      } catch (error) {
        console.log(error)
      }
    
}

export const obtenerDatosFetch = async (url, tabla, campo, valor) => {
    try {
        const response = await fetch(`${BASEURL}/${tabla}?${campo}=${valor}`)
        const jsonResponse = await response.json()
        return jsonResponse
    } catch (error) {
        console.log(error.message)
    }
}

export const addLocalitie = async (localidad, provincia) => {
    try {
        await axios.post(`${BASEURL}/localidades`, {
            localidad: localidad,
            provincia: provincia
        })
    } catch (error) {
        console.log(error)
    }
}



//POST PARA GUARDAR O ESCRIBIR
//GET PARA CONSULTAR