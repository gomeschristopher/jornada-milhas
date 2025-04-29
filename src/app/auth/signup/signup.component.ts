import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/auth/services/signup.service';
import { UserFormService } from 'src/app/core/services/user-form.service';
import { User } from 'src/app/core/types/types';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private userFormService: UserFormService,
    private signupService: SignupService,
    private router: Router
  ) { }

  signup() {
    const formData = this.userFormService.getForm();

    if (formData.valid) {
      const userData = formData.getRawValue() as User;

      this.signupService.cadastrar(userData).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Erro ao realizar cadastro', error);
        }
      });
    }
  }
}
