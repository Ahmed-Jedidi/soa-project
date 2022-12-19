import { Injectable } from '@angular/core';

//Path
import { apiURLclient,apiURLtype } from './../../config';

//Route
import { Router } from '@angular/router';
//Models
import { Client }  from '../models/client.model';
import { Type }  from '../models/type.model';

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
export class AuthService {


  apiURL = apiURLclient;
////GET
//http://localhost:8082/soa/client/all
apiURL0 = apiURLclient+"/all";
//http://localhost:8082/soa/client/{id}
//http://localhost:8082/soa/client/login/{login}
//http://localhost:8082/soa/client/email/{email}
apiURLemail = apiURLclient+"/email";
apiURL1 = apiURLclient+"/";

////POST & PUT
//http://localhost:8082/soa/client

////DELETE
//http://localhost:8082/soa/client/{id}

////GET getAllClientsByTypeNomType
//http://localhost:8082/soa/client/type/{t}
apiURL2 = apiURLclient+"/type/";

/*******************************************************************************/
/*******************************************************************************/
  apiURL01 = apiURLtype;

////GET
//http://localhost:8082/soa/type
//http://localhost:8082/soa/type/{id}
apiURL02 = apiURLtype+"";

////POST
//http://localhost:8082/soa/type

/*******************************************************************************/
/*******************************************************************************/

  public loggedUser !: string;
  public isloggedIn: Boolean = false;
  public AdminOrUser !: string;

  //Local Users Data 
  clients !: Client[]; //un tableau de User
  types !: Type[]; //un tableau de Role

  constructor(private router: Router,
              //API REST
              private http: HttpClient) { 
                this.clients = [];
                this.types = [];
              }

  /////////////////////////////////////////////////////////////////////////////////

  login(user: Client) {
    return this.http.post<Client>(this.apiURL, user, { observe: 'response' });
  }

  //API REST

  listeUsers(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiURL0);
  }

  listeRoles(): Observable<Type[]> {
    return this.http.get<Type[]>(this.apiURL01);
  }

  
    ajouterUser(usr: Client): Observable<Client> {
    return this.http.post<Client>(this.apiURL, usr, httpOptions);
  }
  

  

  
/////////////////////////////////////////////////////////////////////////////////////////

consulterRole(id: number): Observable<Type> {
  const url = `${this.apiURL02}/${id}`;
  return this.http.get<Type>(url);
}


////////////////////////////////////////////////


isClient(): Boolean {
  if (!this.loggedUser) //this.loggedUser == undefiened
    return false;
  return true;
}

////////////////////////////////////////////////

  //Spring Boot

  getUserFromDB(email: string): Observable<Client> {
    const urll = `${this.apiURLemail}/${email}`;
    return this.http.get<Client>(urll);
  }

///////////////////////////////////////////////

SignIn(user: Client) {
  this.loggedUser = user.login;
  this.isloggedIn = true;
  this.AdminOrUser = String(user.type.nomType);
  localStorage.setItem('loggedUser', this.loggedUser);
  localStorage.setItem('isloggedIn', String(this.isloggedIn));
  localStorage.setItem('AdminOrUser', String(user.type.nomType));
}


//////////////////////////////////////////////////////////////////////////////////////////


logout() {
  this.isloggedIn = false;
  this.loggedUser = "";
  this.loggedUser != undefined;
  //this.loggedUser = undefined!;
  this.AdminOrUser = "";
  this.AdminOrUser != undefined;
  //this.AdminOrUser = undefined!;


  localStorage.removeItem('loggedUser');
  localStorage.removeItem('AdminOrUser');
  localStorage.setItem('isloggedIn', String(this.isloggedIn));


  this.router.navigate(['/login']);
}

}
