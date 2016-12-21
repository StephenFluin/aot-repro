import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAJawulOMYRp0eXjMHLqiffzuS9tToCfAI",
      authDomain: "fluindotio-website-93127.firebaseapp.com",
      databaseURL: "https://fluindotio-website-93127.firebaseio.com",
      storageBucket: "fluindotio-website-93127.appspot.com",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
