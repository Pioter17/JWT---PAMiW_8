import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutesPath } from 'src/app/core/enums/routes-path.enum';
import { AuthenticationUserLoginData } from 'src/app/core/interfaces/authentication-user-data.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

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
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null as string, Validators.required],
      password: [null as string, Validators.required]
    });
  }

  login(){
    let user: AuthenticationUserLoginData = this.form.value;
    this.authService.login(user).subscribe((res: { token: any; })=>{
      this.userService.setUserToken(res.token);
      this.router.navigateByUrl('home');
    });

  }

}
