import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppareilComponent} from './appareil/appareil.component';
import {FormsModule} from "@angular/forms";
import {AuthComponent} from './auth/auth.component';
import {AppareilViewComponent} from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {SingleAppareilComponent} from './single-appareil/single-appareil.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {AuthGuardServices} from "./services/auth-guard.services";
import {AppareilService} from "./services/appareil.service";
import {AuthServices} from "./services/auth.services";

const appRoutes: Routes = [
  {path: 'appareils', canActivate: [AuthGuardServices], component: AppareilViewComponent},
  {path: 'appareils/:id', canActivate: [AuthGuardServices], component: SingleAppareilComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: AuthComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthServices,
    AuthGuardServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
