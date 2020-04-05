import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horaire } from '../classes/horaire.model';

const ADDR_SERVEUR = "http://localhost:8090/";

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private httpClient : HttpClient) { }

  findAllHoraires() : Observable<Horaire[]> {
    return this.httpClient.get<Horaire[]>(ADDR_SERVEUR + 'horaires/');
  }

  findAllFermetures() : Observable<string[]> {
    return this.httpClient.get<string[]>(ADDR_SERVEUR + 'fermetures/');
  }
}
