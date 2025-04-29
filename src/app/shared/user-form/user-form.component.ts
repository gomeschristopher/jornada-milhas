import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserFormService } from 'src/app/core/services/user-form.service';
import { State } from 'src/app/core/types/types';
import { FormValidations } from '../form-validations';
import { UserService } from 'src/app/auth/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Input() profileComponent!: boolean;
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
  userForm!: FormGroup;
  stateControl = new FormControl<State | null>(null, Validators.required);

  constructor(
    private formBuilder: FormBuilder,
    private userFormService: UserFormService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      birth: [null, [Validators.required]],
      documentId: [null, [Validators.required]],
      city: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(3)]],
      gender: ['outro'],
      phone: [null, Validators.required],
      state: this.stateControl,
      confirmEmail: [null, [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      confirmPassword: [null, [Validators.required, Validators.minLength(3), FormValidations.equalTo('password')]],
      acceptTerms: [this.profileComponent ? true : null, [Validators.requiredTrue]]
    });

    this.userFormService.setForm(this.userForm);
  }

  submit() {
    this.submitForm.emit(this.userForm.value);
  }

  logout() {
    this.userService.logout();

    this.router.navigate(['/login']);
  }
}
