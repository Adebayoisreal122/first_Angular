import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule,  MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {

  private _formBuilder = inject(FormBuilder);

  public allForms: any [] = []

  firstFormGroup = this._formBuilder.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    uname: ['', Validators.required],

  });
  secondFormGroup = this._formBuilder.group({
    phone: ['', Validators.required],
    email: ['', Validators.required],

  });

  thirdFormGroup = this._formBuilder.group({
    Facebook: ['', Validators.required],
    Twitter: ['', Validators.required],
    whatsapp: ['', Validators.required],
    linkdin: ['', Validators.required],
    instagram: ['', Validators.required],
  });

  fourthFormGroup = this._formBuilder.group({
    homeadd: ['', Validators.required],
    officeadd: ['', Validators.required],

  });

   isLinear = false;

   public formOne :any;
   public formTwo: any;
   public formThree: any;
   public formFour: any;
   public formsarray: any[] = [];

   submit(){


    this.formOne = this.firstFormGroup.value;
    this.formTwo = this.secondFormGroup.value;
    this.formThree = this.thirdFormGroup.value;
    this.formFour = this.fourthFormGroup.value;



    let formsobj= {
      firstgroup: this.formOne,
      secondgroup: this.formTwo,
      threegroup: this.formThree,
      fourthform: this.formFour,
    }    


    

    this.formsarray.push(formsobj)

    localStorage.setItem('MyForms', JSON.stringify(formsobj));

 

   }
  
}
