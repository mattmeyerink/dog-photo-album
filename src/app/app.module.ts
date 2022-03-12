import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoreDogPhotosComponent } from './more-dog-photos/more-dog-photos.component';
import { UtilityDemoComponent } from './utility-demo/utility-demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MoreDogPhotosComponent,
    UtilityDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
