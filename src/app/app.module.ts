import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Components
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
//Routes
import {ROUTTING} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule, 
    ROUTTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
