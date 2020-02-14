import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StackComponent } from './stack/stack.component';
import { DeckComponent } from './deck/deck.component';
import { DiscardComponent } from './discard/discard.component';
import { FoundationComponent } from './foundation/foundation.component';
import { VictoryComponent } from './victory/victory.component';

@NgModule({
  declarations: [
    AppComponent,
    StackComponent,
    DeckComponent,
    DiscardComponent,
    FoundationComponent,
    VictoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
