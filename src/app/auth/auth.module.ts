import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    NewUserComponent,
    LoginComponent,
    ForgotComponent,
    LogoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
