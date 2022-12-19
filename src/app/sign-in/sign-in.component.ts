import { Client } from './../models/client.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
//ERROR TEST
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//ERROR TEST

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public loginValid = true;

  client = new Client();

  constructor(private authService : AuthService,
              private router: Router,
              //ERROR TEST
              ///////////////////////////////////
              private formBuilder : FormBuilder,
              private route : ActivatedRoute
              //ERROR TEST
              ) { 
                //////////////////////Prevent logged user from login in page reload
                if (this.authService.isClient()) {this.router.navigate(['/home/shop']);}
              }

  ngOnInit(): void {
  }

/////////////////////////////////////////////////////////////////////////
  onLoggedin() {

    this.loginValid = true;
    this.authService.getUserFromDB(this.client.email).subscribe((usr: Client) => {

if (usr == null){console.log("faux"); this.loginValid = false;}
else{
      if (usr.password == this.client.password) {
        this.authService.SignIn(usr);

        //this.router.navigate(['/']);
        setTimeout(() => {this.router.navigate(['/home/shop'],)}, 570);
      }
      else{console.log(usr);this.loginValid = false;}
      
}
    });
  }
/////////////////////////////////////////////////////////////////////////

}
