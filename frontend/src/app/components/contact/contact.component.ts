import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // objets utilisés par le composant
  form: FormGroup;
  loginService: LoginService;

  // paramètre en private, pour qu'il puisse être
  // utilisé comme champ d'instance de la classe
  constructor(private formBuilder: FormBuilder) { }

  // cette méthode est appelée lors du chargement de
  // la balise associée à ce composant dans le DOM
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.loginService.signIn(this.form.value.mail, this.form.value.password).subscribe(data => {
      // ce qui est exécuté lorsque l'on a reçu une réponse par le service (HTTP)
    });
    console.log("mail : " + this.form.value.mail 
    + " / mdp : " + this.form.value.password);
  }
}
