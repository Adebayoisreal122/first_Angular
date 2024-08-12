import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tempdriven',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tempdriven.component.html',
  styleUrl: './tempdriven.component.css'
})
export class TempdrivenComponent {


  fname: string = '';
  lname: string = '';

}
