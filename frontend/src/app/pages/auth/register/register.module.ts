import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { RegisterRoutingModule } from './register-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    AuthService
  ]
})
export class RegisterModule { }
