export const BASEURL="http://localhost:3000"

             
export const guardarDatos = async(url,tabla, dato) => {
    try{
        await axios.post(`${BASEURL}/${tabla}`, dato);

    }catch(e){
        console.log(e);
    }      
}

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




//POST PARA GUARDAR O ESCRIBIR
//GET PARA CONSULTAR