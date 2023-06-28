export interface IGeo {
    lat: string;
    lng: string;
}

export interface IAdress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    phone: string;
    website: string;
    email: string;
    address: IAdress;
}
