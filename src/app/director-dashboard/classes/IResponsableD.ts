export interface IResponsableD {
    id?: number;
    nom: string;
    prenom: string;
    montant: number;
    date: FormDataEntryValue;
    genre : Genre;
    user: {
      id?: number;
      username: string;
      email: string;
      telephone: string;
  }

  }
    export enum Genre {
      Responsable_Marche = 'Responsable_Marche',
    Affaire_Finance = 'Affaire_Finance',

  }