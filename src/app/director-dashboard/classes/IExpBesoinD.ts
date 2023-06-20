import { Genre } from "./IResponsableD";
export interface IExpBesoinD {
    id?: number;
    montantApproximatif: number;
    besoin : string;
    valide: boolean;
    dateDemande: FormDataEntryValue;
    dateValidation: FormDataEntryValue;
    membre:{
        id?:number;
        nom?: string;
        prenom?:string;
    }
    responsable: {
        id?: number;
        nom?: string;
        genre?:Genre;
    } 
    typeBesoin:{
        id?:number;
        type?:string;
    }
}
  