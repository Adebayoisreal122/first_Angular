import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FormsModule, NavbarComponent, FooterComponent],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstlesson';


  name = "angular";
  username: string = "Oluwaferanmi";

  num = 10;
  num2 = 20;


  isAdmin = true;


  users:Array<any> = ["mango","orange","banana","apple"];


  students = [
    {id:1, name: "adeola", depart: "software"},
    {id:2, name: "adeola", depart: "software"},
    {id:3, name: "adeola", depart: "software"}
  ]

  // BINDING  
  
  // 1. Property binding
  // 2. Event binding
  // 3. Two way binding


link = "https://www.google.com";
terms = false;
click = false;
UserInput= ""



submitForm(){
  console.log("Form submitted"); 
  alert("form submitted") 
}

}



