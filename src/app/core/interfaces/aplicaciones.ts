import { Descripcion } from "./descripcion"

export interface Aplicaciones {
    id:number
    nombre:string
    imagen:string
    tipo:string
    link:string
    Precio: boolean
    ruta:string
    descripcion: Descripcion[]
}
