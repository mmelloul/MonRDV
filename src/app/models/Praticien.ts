import {Personne} from './Personne';
import {Adresse} from './Adresse';

export class Praticien extends Personne {
  specialite: string;
  lieux: Array<Adresse>;

  constructor (id: number, nom: string, prenom: string, email: string, mdp: string, profil: string, adresse: string, specialite: string, lieux?: Array<Adresse>) {
    super(id, nom, prenom, email, mdp, profil, adresse);
    this.specialite = specialite;
    this.lieux = lieux;
  }
}
