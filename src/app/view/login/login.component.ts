import { Component } from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {
    // Injecte le service AuthService pour gérer l'authentification
    // Injecte le service Router pour la navigation
  }

  // Méthode appelée lors de la soumission du formulaire d'authentification
  onSubmitAuthForm(loginForm: NgForm) {
    if (loginForm.valid) {
      // Vérifie si le formulaire est valide
      this.authService
        .login(loginForm.value) // Appelle la méthode de connexion du service AuthService avec les données du formulaire
        .then(() => this.router.navigateByUrl('/produits'));
      // Redirige l'utilisateur vers la page '/produits' après une connexion réussie
    }
  }


}
