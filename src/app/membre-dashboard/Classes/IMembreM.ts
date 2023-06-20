export interface IMembreM{
    id?: number;
    nom: string;
    prenom: string;
    director: boolean;
    laboratoire: {
        id?: number;
        nom: string;
    }
    user: {
        id?: number;
        username: string;
        email: string;
        telephone: string;
    }
  }