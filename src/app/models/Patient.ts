import {Personne} from './Personne';

export class Patient extends Personne {
  sexe: string;

  constructor (id: number, nom: string, prenom: string, email: string, mdp: string, profil: string, adresse: string, sexe: string) {
    super(id, nom, prenom, email, mdp, profil, adresse);
    this.sexe = sexe;
  }
}
