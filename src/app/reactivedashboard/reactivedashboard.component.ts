import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactivedashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reactivedashboard.component.html',
  styleUrl: './reactivedashboard.component.css'
})
export class ReactivedashboardComponent  implements OnInit {  

  user: any;
time = new Date
  constructor(private router: Router) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    this.user = storedUser ? JSON.parse(storedUser) : null;

    if (!this.user) {

      this.router.navigate(['/login']);
    }
  }
}
