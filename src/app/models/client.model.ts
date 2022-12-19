import { Type } from './type.model';
export class Client{
    code !: number;
    nom !: string ;
    type !: Type;// []
    coef !: number;
    adresse !: string;
    tel !: number;
    email !: string ;
    login !: string;
    password !: string;
}