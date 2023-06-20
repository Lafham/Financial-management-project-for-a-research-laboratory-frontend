export interface ILaboratoireD {
    id?: number;
    nom: string;
    telephone: string;
    email: string;   
    etablissement: {
        id?: number;
        nom?: string;
    }
  }