import { NbLayoutModule } from '@nebular/theme';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { RegisterPersonnelComponent } from './register-personnel/register-personnel.component';
@NgModule({
  declarations: [RegisterPersonnelComponent  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    RouterModule.forChild([

      { path: 'registerpersonnel', component: RegisterPersonnelComponent },
      { path: 'login', component: LoginComponent },

    ])
  ]
})
export class AuthenticationModule { }
