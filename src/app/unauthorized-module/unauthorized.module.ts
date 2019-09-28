import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { UnauthorizedRoutingModule } from './unauthorized-routing.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent, LandingComponent],
  imports: [
    CommonModule,
    UnauthorizedRoutingModule
  ]
})
export class UnauthorizedModule { }
