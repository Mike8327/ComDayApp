import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {UserRoutingModule} from './user-routing.module';
import {SpinnerModule} from '../Shared/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UserRoutingModule,
    SpinnerModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  declarations: [LoginComponent, RegisterComponent, ProfileComponent]
})
export class UsersModule {
}
