import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // dependency injection
constructor(private router: Router) { }


  items =[
    {id:1, name: "mango", price: 1800, available: true},
    {id:2, name: "orange", price: 2600, available: false },
    {id:3, name: "banana", price: 3400, available: true},
    {id:4, name: "apple", price: 4000, available: false},
    {id:5, name: "grapes", price: 3500, available: true},
    {id:5, name: "strawberry", price: 1500, available: false},
    {id:5, name: "cocnut", price: 2500, available: true},
    {id:5, name: "pineapple", price: 5400, available: false},
    {id:5, name: "cherry", price: 4500, available: true},
    {id:5, name: "blueberry", price: 950, available: true},
    {id:5, name: "avocado", price: 5600, available: false},
    {id:5, name: "lemon", price: 5000, available: true},
    {id:5, name: "pawpaw", price: 3000, available: false},
  
    
  ]
  
  Order(items:any){
    console.log("odered")
  items.available = false;
this.router.navigate(['products']);
  }



}
