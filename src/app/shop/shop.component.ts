import { CartService } from './../service/cart.service';
//import currency pipe
import { CurrencyPipe } from '@angular/common'

import { Component, OnInit } from '@angular/core';

import { AuthService } from './../service/auth.service';

//Entity
import { Plante } from './../models/plante.model';
import { Fleur } from '../models/fleur.model';

//service
import { PlanteService } from './../service/plante.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {


  plantes !: Plante[];

  fleurs !: Fleur[];
  //items: any[] | undefined;
  items : any[] =  [];

  constructor(private planteService : PlanteService, private router: Router,public authService: AuthService, public cartService: CartService) { 

    this.planteService.listePlantes().subscribe(livs => {
      console.log(livs);
      this.plantes = livs;
    });

    this.planteService.listeFleurs().subscribe(livs => {
      console.log(livs);
      this.fleurs = livs;
    });

  }



  //----- add item to cart
addToCart(item: any) {
  if (!this.cartService.itemInCart(item)) {
    item.quantite = 1;
    this.cartService.addToCart(item); //add items in cart
    //this.items = [...this.cartService.getItems()];
  }
}



  
  ngOnInit(): void {}

  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ["1.webp", "2.webp" , "3.webp", "4.jpg", ].map((n) => `../../assets/images/s${n}`);




}
