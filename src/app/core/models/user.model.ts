export interface User {
    name: string,
    lastname: string,
    mail: string,
    dni: string,
    phone: string,
    state: string,
    admin: boolean
}

export interface Login {
    name: string,
    mail: string,
}