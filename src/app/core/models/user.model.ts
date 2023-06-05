export interface User {
    name: string,
    lastname: string,
    mail: string,
    password: string,
    dni: string,
    phone: string
}

export interface Login {
    mail: string,
    password: string
}