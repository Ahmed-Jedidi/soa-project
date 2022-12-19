import { Fleur } from './../models/fleur.model';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { PlanteService } from './../service/plante.service';
import { Plante } from './../models/plante.model';
import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  VERSION,
  ViewChildren
} from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { CartService } from "../service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // @ViewChildren('myitems') subTotalItems: QueryList<ElementRef>;
  @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef> | undefined;
  @ViewChildren("subTotalWrap_existing") subTotalItems_existing: QueryList<ElementRef> | undefined;

  items :any[] = [];

  plantes !: Plante[];

  fleurs !: Fleur[];

  sampleSuggestionsArray !: Plante[];

  constructor(public cartService: CartService,
    private planteService : PlanteService, 
    private router: Router,
    public authService: AuthService
    ) {
      /*this.planteService.listePlantes().subscribe(livs => {
        console.log(livs);
        this.sampleSuggestionsArray = livs;
      });*/
      this.planteService.listePlantes().subscribe(livs => {
        console.log(livs);
        this.sampleSuggestionsArray = livs;
        
      });
  
      /*this.planteService.listeFleurs().subscribe(livs => {
        console.log(livs);
        this.fleurs = livs;
      });*/
     }
     



  /*sampleSuggestionsArray = [
    {"id":1,"nom":"Orange","origine":"Tunisie","couleurs":"Jaune","prix":56.0,"description":"Multi Description","fleur":{"id":1,"nom":"tulipe","couleur":"Purple","odeur":"Good","prix":15.0,"quantite":156,"promotion":10.0,"utilisations":"Medicale"},"quantite":89,"promotion":19.0,"utilisations":[{"utilisation_id":1,"titre":"Bio","detaille":"detaille Bio"},{"utilisation_id":2,"titre":"Medicale","detaille":"detaille Medicament"}]},
    {"id":2,"nom":"Citron","origine":"Asie","couleurs":"Jaune","prix":15.0,"description":"Citronade","fleur":null,"quantite":126,"promotion":12.0,"utilisations":[]}
  ];*/
  /*sampleSuggestionsArray = [
    {
      id: "1",
      menuName: "Item 1",
      variationCost: "20.50",
      desc: "Lorem ipsum dolor sit amet..",
      qtyTotal: 0
    },
    {
      id: "2",
      menuName: "Item 2",
      variationCost: "10",
      desc: "Lorem ipsum dolor sit amet..",
      qtyTotal: 0
    },
    {
      id: "3",
      menuName: "Item 3",
      variationCost: "5.50",
      desc: "Lorem ipsum dolor sit amet..",
      qtyTotal: 0
    }
  ];*/
////////////////////////////////////////////////////////////////////////////////////////////////////

//----- calculate total
get total() {
  return this.items.reduce(
    (sum, x) => ({
      quantite: 1,
      prix: sum.prix + x.quantite * x.prix
    }),
    { quantite: 1, prix: 0 }
  ).prix;
}

changeSubtotal(item: any, index: number) {
  const qty = item.quantite;
  //const am : string =(item.prix -( item.prix * item.promotion /100)).toFixed(3);
  //const amt= (item.prix -( item.prix * item.promotion /100)).toFixed(3);
  //const amt = parseFloat(am);
  const amt= (item.prix -( item.prix * item.promotion /100))
  //const amt = item.prix; // - (item.prix * item.coef)
  const subTotal = amt * qty;
  //const subTotal_converted = this.currencyPipe.transform(subTotal, "USD");
  const subTotal_converted = "TND "+subTotal.toFixed(3);

  this.subTotalItems!.toArray()[
    index
  ].nativeElement.innerHTML = subTotal_converted;
  this.cartService.saveCart();
}

//----- remove specific item
removeFromCart(item : any) {
  this.cartService.removeItem(item);
  this.items = this.cartService.getItems();
}

//----- clear cart item
clearCart(items: any) {
  //this.items.forEach((item, index) => this.cartService.removeItem(index));
  this.cartService.clearCart(items);
  this.items = [...this.cartService.getItems()];
}

//----- add item to cart
addToCart(item: any) {
  if (!this.cartService.itemInCart(item)) {
    item.quantite = 1;
    this.cartService.addToCart(item); //add items in cart
    this.items = [...this.cartService.getItems()];
  }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(): void {
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
  }

}
