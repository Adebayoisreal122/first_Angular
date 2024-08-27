import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [
    MatButtonModule,
    HttpClientModule,
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'] // Corrected from `styleUrl` to `styleUrls`
})
export class MaterialComponent {

  constructor(public http: HttpClient) { }

  private _formBuilder = inject(FormBuilder);

  public allForms: any[] = [];

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

  public formOne: any;
  public formTwo: any;
  public formThree: any;
  public formFour: any;

  submit() {
    this.formOne = this.firstFormGroup.value;
    this.formTwo = this.secondFormGroup.value;
    this.formThree = this.thirdFormGroup.value;
    this.formFour = this.fourthFormGroup.value;

    let formsobj = {
      firstgroup: this.formOne,
      secondgroup: this.formTwo,
      threegroup: this.formThree,
      fourthform: this.formFour,
    };

    let allForms = JSON.parse(localStorage.getItem('MyForms') || '[]'); // Corrected empty object to empty array

    this.allForms.push(formsobj);

    localStorage.setItem('MyForms', JSON.stringify(this.allForms)); // Save this.allForms instead of allForms
  }

  public data: any = '';
  public title = '';
  public content = '';

  save() {
    let todoobj = {
      title: this.title,
      content: this.content,
    };
    this.http.post('http://localhost/backend/recieve.php', todoobj).subscribe((data: any) => {
      console.log(data);
    });
  }

  public notes: any[] = [];

  ngOnInit() {
    this.http.get('http://localhost/backend/getinfo.php').subscribe((data: any) => {
      this.data = data; // Assign the data received from the backend to this.data
      console.log(this.data);
      this.notes = this.data;
    });
  }
}
