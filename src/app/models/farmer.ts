
export interface Location {
    name: string;
    id: string;
}
export interface Farmer {
    firstName: string;
    middleName?: string;
    lastName: string;
    mobile?: string;
    location: Location;
}
export interface User {
    firstName: string;
    middleName?: string;
    lastName: string;
    mobile?: string;
    emaill: string;
    password: string;
}
