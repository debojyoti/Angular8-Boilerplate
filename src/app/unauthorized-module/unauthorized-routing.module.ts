import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
    path: 'login',
    component: LoginComponent
}, {
    path: 'signup',
    component: SignupComponent
}, {
    path: '',
    component: LandingComponent
}, {
    path: '**',
    redirectTo: '/login'
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnauthorizedRoutingModule { }