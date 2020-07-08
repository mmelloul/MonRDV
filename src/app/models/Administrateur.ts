import {Personne} from './Personne';

export class Administrateur extends Personne {

  constructor (id: number, nom: string, prenom: string, email: string, mdp: string, profil: string, adresse: string) {
    super(id, nom, prenom, email, mdp, profil, adresse);
  }
}
