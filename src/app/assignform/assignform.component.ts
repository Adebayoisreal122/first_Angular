import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './assignform.component.html',
  styleUrl: './assignform.component.css'
})
export class AssignformComponent {


  fname: string = '';
  lname: string = '';
  lemail: string = '';
  pass: string = '';
  gend: string = '';
  term: boolean = false;
  mail: string = '';






}
