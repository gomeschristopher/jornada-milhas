import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  userForm!: FormGroup;

  constructor() { }

  getForm() {
    return this.userForm;
  }

  setForm(form: FormGroup) {
    this.userForm = form;
  }
}
