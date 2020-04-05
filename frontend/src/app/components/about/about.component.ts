import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/classes/produit.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  produits: Observable<Produit[]>;

  constructor(private pService : ProduitService) { }

  ngOnInit(): void {
    this.produits = this.pService.findAll();
  }
}
