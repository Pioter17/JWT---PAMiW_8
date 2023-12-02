import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoutesPath } from 'src/app/core/enums/routes-path.enum';
import { AuthenticationUserLoginData } from 'src/app/core/interfaces/authentication-user-data.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  register = `/${RoutesPath.AUTH}/${RoutesPath.REGISTER}`;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null as string, Validators.required],
      password: [null as string, Validators.required]
    });
  }

  login(){
    let user: AuthenticationUserLoginData = this.form.value;
    this.authService.login(user).subscribe(()=>{
      console.log("zalogowano");
    });
  }

}
