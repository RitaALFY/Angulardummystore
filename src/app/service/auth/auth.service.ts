import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Environment } from "../../environment/environment";
import { BehaviorSubject, firstValueFrom, map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseApiUrl: string;
  private tokenSubject$: BehaviorSubject<string>;
  token$: Observable<string>;

  constructor(private http: HttpClient) {
    this.baseApiUrl = Environment.API_URL;

    // Créer un BehaviorSubject pour suivre le jeton d'authentification
    this.tokenSubject$ = new BehaviorSubject<string>('');

    // Convertir le BehaviorSubject en Observable pour l'abonnement externe
    this.token$ = this.tokenSubject$.asObservable();
  }

  // Propriété calculée pour obtenir la valeur actuelle du jeton
  get token(): string {
    return this.tokenSubject$.value;
  }

  // Méthode pour se connecter
  login(credentials: { username: string, password: string }): Promise<void> {
    return firstValueFrom(
      this.http
        .post<{ token: string }>(this.baseApiUrl + 'auth/login', credentials)
        .pipe(
          // Mettre à jour le BehaviorSubject avec le jeton reçu après la connexion réussie
          map(res => this.tokenSubject$.next(res.token))
        )
    );
  }

  // Méthode pour se déconnecter
  logout() {
    // Vider le BehaviorSubject en attribuant une chaîne vide
    this.tokenSubject$.next('');
  }
}
