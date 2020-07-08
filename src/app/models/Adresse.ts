export class Adresse {
  rue: string;
  CP: string;
  ville: string;


  constructor(rue: string, CP: string, ville: string) {
    this.rue = rue;
    this.CP = CP;
    this.ville = ville;
  }

  toString(): string
  {
    return this.rue +  ' ' + this.CP +  ' ' + this.ville.toUpperCase();
  }
}
