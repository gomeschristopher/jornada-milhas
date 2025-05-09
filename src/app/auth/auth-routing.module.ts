import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "./auth.guard";

import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: SignupComponent },
    { path: 'perfil', component: ProfileComponent, canActivate: [authGuard] },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }