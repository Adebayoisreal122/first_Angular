import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databased',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './databased.component.html',
  styleUrl: './databased.component.css' 
})
export class DatabasedComponent {

  constructor(public http: HttpClient) { }

  public data: any = '';
  public title = '';
  public content = '';
  public notes: any[] = [];

  save() {
    let todoobj = {
      title: this.title,
      content: this.content,
    };
    this.http.post('http://localhost/backend/recieve.php', todoobj).subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnInit() {
    this.http.get('http://localhost/backend/getinfo.php').subscribe((data: any) => {
      console.log(data); 
      this.notes = data;
    });
  }
}
