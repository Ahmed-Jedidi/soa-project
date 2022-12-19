import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NgModule/*, CUSTOM_ELEMENTS_SCHEMA*/ } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './open-close/open-close.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Materials
//import { FlexLayoutModule } from '@angular/flex-layout';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//angular-material.module
import { AngularMaterialModule } from './angular-material.module';

//Flex
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
    declarations: [
        AppComponent,
        OpenCloseComponent,
        HomeComponent,
        HeaderComponent,
        PageNotFoundComponent,
        SignInComponent,
        SignUpComponent,
        SignOutComponent,
        ShopComponent,
        CartComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        //NGG Bootstrap
        NgbModule,
        //make all the necessary imports for form implementation {{ user.nom | salem}}
        FormsModule,
        //HTTP requests and response
        HttpClientModule,
        //Animation
        BrowserAnimationsModule,
        MatSliderModule,
        MatToolbarModule,
        MatIconModule,
        //FontAwesome(Icons...)
        FontAwesomeModule,
        //Plus Materials 
        MatInputModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatTableModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatOptionModule,
        //Materials
        AngularMaterialModule,
        //Flex
        FlexLayoutModule,
        //Reactive Forms like FormsModule
        ReactiveFormsModule
    ]
})
export class AppModule { }
