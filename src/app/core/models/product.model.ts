export interface Product {
    nombre: string,
    precio: number | string,
    id_subcategoria: number | string;
    subCategoria: string | undefined;
    imagenes: [{
        nombre: string
    }]
}

export interface SubCategory {
    id: number,
    nombre: string,
    imagen: string
}