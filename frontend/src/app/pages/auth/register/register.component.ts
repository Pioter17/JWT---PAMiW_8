import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from 'src/app/core/interfaces/authentication-response.interface';
import { AuthenticationUserLoginData, AuthenticationUserRegisterData } from 'src/app/core/interfaces/authentication-user-data.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null as string, Validators.required],
      password: [null as string, Validators.required]
    });
  }

  register(){
    let user: AuthenticationUserRegisterData = this.form.value;
    let token: Observable<AuthenticationResponse> = this.authService.register(user);
    token.subscribe((res)=>{
      this.userService.setUserToken(res.token);
      console.log(res.token);
    });
  }

}
