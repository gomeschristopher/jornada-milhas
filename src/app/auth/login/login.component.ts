import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  login() {
    const login = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.login(login, password)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          console.error('Login failed', error);
          // Handle login error here, e.g., show an error message
        }
      });
  }
}
