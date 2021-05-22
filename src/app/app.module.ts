import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule   } from "@angular/forms";   
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



import { HeaderComponent } from './header/header.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'service', component: ServicesComponent },
  { path: '', component: IndexpageComponent },
  { path: 'home', component: IndexpageComponent },
  { path: 'homepage', component: IndexpageComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexpageComponent,
    ServicesComponent,
    AboutusComponent,
    ContactusComponent,
    GalleryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
