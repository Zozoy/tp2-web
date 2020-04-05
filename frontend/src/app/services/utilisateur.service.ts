import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../classes/utilisateur.model';

const ADDR_SERVEUR = "http://localhost:8090/";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(ADDR_SERVEUR + 'utilisateurs/');
  }

  findUtilisateur(mail : string): Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(ADDR_SERVEUR + 'utilisateur/' + mail);
  }
}