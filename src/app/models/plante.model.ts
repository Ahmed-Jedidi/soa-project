import { Fleur } from './fleur.model';
import { Utilisation } from './utilisation.model';
export class Plante{
    id !: number;
    nom !: string ;
    origine !: string ;
    couleurs !: string;
    prix !: number;
    description !: string;
    fleur !: Fleur;// []
    quantite !: number;
    promotion !: number;
    utilisations !: Utilisation[];// []
}