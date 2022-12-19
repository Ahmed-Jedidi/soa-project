
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from './../models/client.model';
import { Type } from './../models/type.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];

  users !: Client[]; //un tableau de User

newUser = new Client();



roles !: Type[];

newIdRole !: number;

newRole !: Type;

  constructor(private authService : AuthService,
    private router : Router,) { }

  ngOnInit(): void {

 this.authService.listeRoles().subscribe(rols => {
  console.log(rols);
  this.roles = rols;
});
this.authService.listeUsers().subscribe(usrs => {
  console.log(usrs);
  this.users = usrs;
});
  }

//////////////////////////////////////////////////////

   addUser() {
    //this.authService.consulterRole(this.newIdRole).subscribe((r : Role)=> {this.newRole = r;  /*console.log(r);*/ });
    //this.newUser.role = this.newRole;
    console.log(this.newIdRole);
    console.log("no", this.newUser);
    //this.newUser.enabled = true;
   
   
    this.authService.consulterRole(2).subscribe( liv =>{
       this.newUser.type = liv;  
       this.newUser.coef= 0;

         this.authService.ajouterUser(this.newUser).subscribe(usr => { console.log(usr); });

         //this.router.navigate(['/users']);
         setTimeout(() => {this.router.navigate(['/login'],)}, 570);
         /*this.router.navigate(['/users']).then(() => {
                                                       window.location.reload();
                                                     });*/
       
       
       
       
       
       
       } ) ;
   
   
    
   }

}
