export interface Product {
    id_producto: number
    nombre: string,
    precio: number,
    id_subcategoria: number | string;
    subCategoria: string | undefined;
    imagenes: [{
        nombre: string
    }]
    inCart: boolean
}

export interface SubCategory {
    id: number,
    nombre: string,
    imagen: string
}