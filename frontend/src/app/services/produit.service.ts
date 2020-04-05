import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../classes/produit.model';

const ADDR_SERVEUR = "http://localhost:8090/";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private httpClient : HttpClient) { }

  findAll(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(ADDR_SERVEUR + 'produits/');
  }
}
