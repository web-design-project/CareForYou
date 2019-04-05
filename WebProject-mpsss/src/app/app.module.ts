import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    CarouselComponent,
    ContactUsFormComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
{ path: 'sign-up', component: SignUpComponent },
{ path: 'home', component: CarouselComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
