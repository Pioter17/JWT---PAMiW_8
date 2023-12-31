import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { KeyStorage } from '../enums/key-storage.enum';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { isEmpty } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userToken: string;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  setUserToken(token: string): void {
    this.localStorageService.setItem(KeyStorage.USER_AUTHENTICATION_TOKEN, token);
  }

  getUserToken(): string {
    return this.localStorageService.getItem<string>(KeyStorage.USER_AUTHENTICATION_TOKEN);
  }

  isAuthenticated(): boolean {
    return !isEmpty(this.getUserToken());
  }

  logout(): void {
    this.clearAll();
  }

  // isTokenExpired(): boolean {
  //   const { expires_at } = this.user();

  //   return isAfter(new Date(), new Date(expires_at));
  // }

  // private user(): string {
  //   return this.localStorageService.getItem<string>(KeyStorage.USER_AUTHENTICATION_TOKEN);
  // }

  private clearAll(): void {
    console.log("przed");
    this.localStorageService.clear();
    console.log("pomiędzy");
    void this.router.navigateByUrl('auth/login');
  }
}
