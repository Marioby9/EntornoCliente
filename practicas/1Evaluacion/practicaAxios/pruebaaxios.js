import { guardarDatos, BASEURL, obtenerDatos, guardarDatosFetch, obtenerDatosFetch } from "./crudAxios.js";
const botonGuarda = document.getElementById('boton')
const botonObten = document.getElementById('boton2')
const nombre = document.getElementById('nombre')
const anadeTabla = document.getElementById('anadeTabla')
const correo = document.getElementById('correo')
const $list = document.getElementById("list")
const tabla = [
/*
   { nombre:...,
     email:....,
 }
*/            
]



const paintElement = (elm) => {
    const element = document.createElement("li")
    element.innerHTML = `<div class="container" id="${elm.id}">
                                <div class="data">
                                    <p>Nombre: ${elm.nombre}</p>
                                    <p>Email: ${elm.email}</p>
                                    <p>id: ${elm.id}</p>
                                </div>
                                
                            </div>`
    $list.append(element)
}



anadeTabla.addEventListener("click",()=> {
    tabla.push({
               'nombre':nombre.value,
               'email' : correo.value,
               })
    console.log(tabla)
                                       
                                        })
botonGuarda.addEventListener("click",() => tabla.forEach(el => guardarDatosFetch('conceptos', el)));
botonObten.addEventListener("click",async() => {
    const resultado = await obtenerDatosFetch('conceptos','nombre', nombre.value);
    $list.innerHTML = ""
    resultado.forEach(elm => paintElement(elm))
});


