import {Adresse} from "./Adresse";

export class Personne {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  mdp: string;
  profil: string;
  adresse: Adresse;

  constructor(id?: number, nom?: string, prenom?: string, email?: string, mdp?: string, profil?: string, adresse?: Adresse) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.mdp = mdp;
    this.profil = profil;
    this.adresse = adresse;
  }
}
