import { Utilisateur } from '../entities/utilisateurs';

export interface IUtilisateurRepository {
  findByEmail(email: string): Promise<Utilisateur | null>;
}