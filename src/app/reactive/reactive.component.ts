import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  errors: string | null = null;

constructor( public formbuild: FormBuilder, public routes: Router) { }
public array:any=[];
public firstForm=this.formbuild.group({
  fname: ['', [Validators.required, Validators.minLength(5) ] ],
  lname:  ['', [Validators.required, Validators.minLength(5)  ]],
  lemail:  ['', [Validators.required,  Validators.email] ],  
  pass: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/)]],
  gend:  ['', [Validators.required, Validators.minLength(4)  ]],
  termsRef: new FormControl(false, [Validators.requiredTrue]), 

})


signup() {
  const formData = this.firstForm.value;
  const email = formData['lemail']; 
  
  const existingData = JSON.parse(localStorage.getItem('data') || '[]');

  const emailExists = existingData.some((item: any) => item.lemail === email);

  if (emailExists) {

    this.errors = 'Email already exists. Please use a different email.';
  } else {
    console.log(formData);
    
    this.firstForm.reset(); 

    existingData.push(formData);
    localStorage.setItem('data', JSON.stringify(existingData));
    this.routes.navigate(['/reactsignin']);
  }
}
}
