export interface ILaboratoire {
    id?: number;
    nom: string;
    telephone: string;
    email: string;   
    etablissement: {
        id?: number;
        nom?: string;
    }
  }