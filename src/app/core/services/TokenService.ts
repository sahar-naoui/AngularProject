import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenSubject = new BehaviorSubject<string>(this.getToken());

  constructor() { }

  getToken(): string {
    // @ts-ignore
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }

  getTokenObservable(): BehaviorSubject<string> {
    return this.tokenSubject;
  }
}
