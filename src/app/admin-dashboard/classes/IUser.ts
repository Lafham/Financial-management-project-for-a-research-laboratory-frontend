export interface IUser {
    id?: number;
    username: string;
    email: string;
    password: string;
    telephone: string;
    role: Role;
  }
  export enum Role {
    ADMIN = 'ADMIN',
    MEMBRE = 'MEMBRE',
    DIRECTEUR = 'DIRECTEUR',
    RESPONSABLE = 'RESPONSABLE',
  }