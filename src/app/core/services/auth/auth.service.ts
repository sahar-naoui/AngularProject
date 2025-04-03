import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import { routes, SideBarService } from '../../core.index';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenService} from "../TokenService";
import {environment} from "../../../../environments/environment";
const API = environment.API;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public checkAuth: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('authenticated') || "false"
  );
  cleanedToken:any
  headers:any
  constructor(private router: Router, private sidebar: SideBarService,private http:HttpClient, private tokenService: TokenService) {
    if(this.tokenService.getToken() != null) {
      this.cleanedToken = this.tokenService.getToken().replace(/"/g, '');
      this.headers = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization':'bearer '+ this.cleanedToken
        })
      };
    }

  }

  register(client: Object): Observable<Object> {
    return this.http.post(
      API + 'auth/register',client,
      //this.headers
    );
  }
  login(client: Object): Observable<Object> {
    return this.http.post(
      API + 'auth/login',client,

    );
  }
  public login1(): void {
    this.checkAuth.next('true');
    localStorage.setItem('authenticated', 'true');
    localStorage.setItem('timeOut', Date());
    this.router.navigate([routes.dashboard]);
    localStorage.setItem('layoutPosition', '1');
  }
  public logout(): void {
    this.router.navigate([routes.login]);
    this.checkAuth.next("false");
    localStorage.clear();
    sessionStorage.clear();
  }
}
