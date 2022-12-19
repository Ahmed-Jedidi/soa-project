import { Injectable } from '@angular/core';

//Path
import { apiURLplante } from './../../config';

//Route
import { Router } from '@angular/router';
//Models
import { Plante } from './../models/plante.model';
import { Fleur } from '../models/fleur.model';
import { Utilisation } from './../models/utilisation.model';

//API REST
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

// Important to know
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlanteService {

  apiURL = apiURLplante;

  //Local Users Data 
  plantes !: Plante[]; //un tableau de User
  fleurs !: Fleur[]; //un tableau de Role

  constructor(private router: Router,
    //API REST
    private http: HttpClient) { 
      this.plantes = [];
      this.fleurs = [];
     }


  /////////////////////////////////////////////////////////////////////////////////

       //API REST

  listePlantes(): Observable<Plante[]> {
    return this.http.get<Plante[]>(this.apiURL);
  }

  listeFleurs(): Observable<Fleur[]> {
    return this.http.get<Fleur[]>(this.apiURL);
  }
}
