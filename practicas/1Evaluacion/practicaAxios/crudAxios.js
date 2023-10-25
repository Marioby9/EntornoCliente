export const BASEURL="http://localhost:3000"

             
export const guardarDatos = async(url,tabla, dato) => {
    try{
        await axios.post(`${BASEURL}/${tabla}`, dato);

    }catch(e){
        console.log(e);
    }      
}

export const obtenerDatos = async(url, tabla,campo,valor) => {
    try {
        const response = await axios.get(`${BASEURL}/${tabla}?${campo}=${valor}`)
        return response.data
      } catch (error) {
        console.log(error)
      }
    
}



//POST PARA GUARDAR O ESCRIBIR
//GET PARA CONSULTAR