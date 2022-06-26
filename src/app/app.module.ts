import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CounterComponent } from './components/counter/counter.component';
import { WishMessageComponent } from './components/wish-message/wish-message.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ChangeUsernameComponent } from './components/change-username/change-username.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CounterComponent,
    WishMessageComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    ChangeUsernameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
