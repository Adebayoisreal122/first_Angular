import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
constructor (
    public userservice : UserService
){}

public usersarray: any = [];

public mesg: string = "";

ngOnInit() :void {
  
  console.log(this.userservice.getusersarray());
  this.usersarray = this.userservice.getusersarray();

this.mesg=this.userservice.mesg;
}


}
