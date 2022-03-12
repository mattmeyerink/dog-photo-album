import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MoreDogPhotosComponent } from './more-dog-photos/more-dog-photos.component';
import { UtilityDemoComponent } from './utility-demo/utility-demo.component';

const routes: Routes = [
  { path: 'more-dogs', component: MoreDogPhotosComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'utility-demo', component: UtilityDemoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
