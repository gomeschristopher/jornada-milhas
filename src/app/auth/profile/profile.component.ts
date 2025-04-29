import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/auth/services/token.service';
import { UserFormService } from 'src/app/core/services/user-form.service';
import { UserService } from 'src/app/auth/services/user.service';
import { User } from 'src/app/core/types/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: User;
  form!: FormGroup<any> | null;

  constructor(private tokenService: TokenService,
    private userService: UserService,
    private userFormService: UserFormService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.userService.fetchUser().subscribe({
      next: resData => {
        this.user = {
          name: resData.nome,
          birth: resData.nascimento,
          documentId: resData.cpf,
          phone: resData.telefone,
          email: resData.email,
          password: resData.senha,
          city: resData.cidade,
          state: resData.estado,
          gender: resData.genero
        };

        this.loadForm();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  loadForm() {
    this.form = this.userFormService.getForm();

    this.form?.patchValue(this.user);
  }

  update() {
    const updatedData = {
      name: this.form?.value.name,
      birth: this.form?.value.birth,
      documentId: this.form?.value.documentId,
      phone: this.form?.value.phone,
      email: this.form?.value.email,
      password: this.form?.value.password,
      city: this.form?.value.city,
      state: this.form?.value.state,
      gender: this.form?.value.gender
    };

    this.userService.editUser(updatedData).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
