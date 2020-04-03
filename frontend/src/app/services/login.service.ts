import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  signIn(mail: string, password: string): Observable<boolean> {
    // appel de votre service REST
  return null;
  }
}
