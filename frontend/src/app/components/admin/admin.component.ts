import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Utilisateur } from 'src/app/classes/utilisateur.model';
import { Observable } from 'rxjs';

const MSG_ADMIN = "Bienvenue sur le panel Admin";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  form :  FormGroup;
  admin:  Observable<Utilisateur>;

  constructor(private formBuilder : FormBuilder, 
    private uService : UtilisateurService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mail:     ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.admin = undefined;
  }

  onSubmit(): void {
    this.admin = this.uService.findUtilisateur(this.form.value.mail);
    // modifier la barre de navigation
    document.getElementsByTagName("nav")[0].setAttribute("style", "display: none;");
    document.getElementById("disconnect").setAttribute("style", "display: block");
    document.getElementsByTagName("span")[0].innerHTML = MSG_ADMIN;
  }
}