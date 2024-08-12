import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactivesignin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactivesignin.component.html',
  styleUrl: './reactivesignin.component.css'
})
export class ReactivesigninComponent {
constructor( public formbulding: FormBuilder, public routed:Router) { }

errorMessage: string | null = null;

public formtwo=this.formbulding.group({

  lemail: new FormControl('', [Validators.required, Validators.email]),
  pass: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/)]],

})

signin() {

  const formData = this.formtwo.value;
  const email = formData['lemail'];
  const password = formData['pass'];

  const existingData = JSON.parse(localStorage.getItem('data') || '[]');

  const userLog = existingData.find((user: any) => user.lemail === email && user.pass === password);
  const userExists = userLog !== undefined;
  
  if (userExists) {
    localStorage.setItem('user', JSON.stringify(userLog));
    this.routed.navigate(['/reactdash']);
  } else {

    this.errorMessage = 'Email and password are not correct.';
  }
}
}
