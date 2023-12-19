export const BASEURL="http://localhost:3000"

             
export const guardarDatos = async(tabla, dato) => {
    try{
        await axios.post(`${BASEURL}/${tabla}`, dato);  
    }catch(e){
        console.log(e);
    }      
}

export const obtenerDatos = async(tabla,campo,valor) => {
    try {
        const response = await axios.get(`${BASEURL}/${tabla}?${campo}=${valor}`)
        return response
      } catch (error) {
        console.log(error)
      }   
}

async function obtenerDatos2 (tabla,campo,valor){
    try {
        const response = await axios.get(`${BASEURL}/${tabla}?${campo}=${valor}`)
        return response
      } catch (error) {
        console.log(error)
      }   
}


async function eliminaDatos (tabla, id){
    try {
        const response = await axios.delete(`${BASEURL}/${tabla}/${id}`)
        console.log("eliminado")
      } catch (error) {
        console.log("no existe en la tabla")
      } 
}

//AHORA CON FETCH

export const guardarDatosFetch = async (tabla, dato) => {
    try {
        const saved = fetch(`${BASEURL}/${tabla}`, {
            method: "POST",
            body: JSON.stringify(dato),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export const obtenerDatosFetch = async (tabla, campo, valor) => {
    try {
        const response = await fetch(`${BASEURL}/${tabla}?${campo}=${valor}`)
        const resultsJSON = await response.json()
        return resultsJSON
    } catch (error) {
        console.log(error)
    }
}
