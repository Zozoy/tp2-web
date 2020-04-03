import { Component, OnInit } from '@angular/core';

export interface SectionJourOuvert {
  nom: String;
  heureDebut: String;
  heureFin: String;
}

export interface SectionJourFerme {
  dateFermeture: String;
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // méthode qui génère une date de fermeture exceptionnelle
  // jusqu'à 4 mois avant le numéro de mois en paramètre
  genererDateFermeture(moisMax): String {
    do {
      let jour = Math.floor(Math.random() * 28) + 1
      let mois = moisMax - Math.floor(Math.random() * 4)
      // date au format anglo-saxon MM-jj-aaaa
      var date = new Date(mois + '-' + jour + '-2020')
      // tant que le jour de la date générée est un dimanche
    } while(date.toDateString().split(' ')[0] == "Sun")
    // formater la date générée en "format français"
    let options = {weekday: "long", day: "numeric", month: "long", year: "numeric"}
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
  }

  joursOuverts: SectionJourOuvert[] = [
    {
      nom: "Lundi",
      heureDebut: "9h30",
      heureFin: "18h30"
    },
    {
      nom: "Du mardi au vendredi",
      heureDebut: "8h30",
      heureFin: "18h00"
    },
    {
      nom: "Samedi",
      heureDebut: "8h30",
      heureFin: "12h00"
    }
  ];

  joursFermes: SectionJourFerme[] = [
    {
      dateFermeture: this.genererDateFermeture(4)
    },
    {
      dateFermeture: this.genererDateFermeture(8)
    },
    {
      dateFermeture: this.genererDateFermeture(12)
    }
  ];
}