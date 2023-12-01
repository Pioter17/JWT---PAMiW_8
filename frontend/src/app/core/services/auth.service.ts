import { Api } from '../enums/api.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationUserLoginData, AuthenticationUserRegisterData } from '../interfaces/authentication-user-data.interface';
import { PATHS } from '../constants/api-paths.const';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthenticationResponse } from '../interfaces/authentication-response.interface';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  register(registerData: AuthenticationUserRegisterData): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${PATHS.API_MOVIES_BASE_PATH}${Api.REGISTER}`, registerData).pipe(
      catchError(() => of({ token: "" })),
    )
  }

  login(loginData: AuthenticationUserLoginData): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${PATHS.API_MOVIES_BASE_PATH}${Api.LOGIN}`, loginData).pipe(
      catchError(() => of({ token: "" })),
    )
  }

  logout(): Observable<boolean> {
    return this.http.delete<unknown>(`${PATHS.API_MOVIES_BASE_PATH}${Api.LOGOUT}`, {}).pipe(
      map(() => true),
      catchError(() => of(false)),
    )
  }
}
