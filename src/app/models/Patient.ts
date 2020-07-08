import {Personne} from './Personne';
import {Adresse} from './Adresse';

export class Patient extends Personne {
  sexe: string;

  constructor(id?: number, nom?: string, prenom?: string, email?: string, mdp?: string, profil?: string, adresse?: Adresse, sexe?: string) {
    super(id, nom, prenom, email, mdp, profil, adresse);
    this.sexe = sexe;
  }
}
