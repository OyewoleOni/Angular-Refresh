import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CounterComponent } from './components/counter/counter.component';
import { WishMessageComponent } from './components/wish-message/wish-message.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CounterComponent,
    WishMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
