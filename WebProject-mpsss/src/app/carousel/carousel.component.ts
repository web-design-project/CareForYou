import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})


export class CarouselComponent  {
  loginVar: boolean=false;
  signupVar: boolean=false;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  loginFormModalEmail = new FormControl('', Validators.email);
  loginFormModalPassword = new FormControl('', Validators.required);


  onLogin() { 
          this.loginVar=!this.loginVar;
  }

  onSignUp() {
    this.signupVar=!this.signupVar;
}
}
