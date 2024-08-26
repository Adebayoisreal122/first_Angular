import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

username: string | null = '';
  constructor(private router: Router, private route: ActivatedRoute ) {}

  ngOnInit() {

    const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    this.user = currentUser;

    // this.username = this.route.snapshot.paramMap.get('username');

    // const storedUser = localStorage.getItem('data');
    // this.user = storedUser ? JSON.parse(storedUser) : null;

    if (!this.user) {

      this.router.navigate(['/reactsignin']);
    }
  }

  logout() {
  
    localStorage.removeItem('user');
    
    this.router.navigate(['/reactsignin']);
  }

}
