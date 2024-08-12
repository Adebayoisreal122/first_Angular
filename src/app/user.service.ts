import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public mesg: string = "we are the light of the world"

  public usersarray = [{id:1,name:'John',email:'john@gmail.com'},
    {id:2,name:'Mike',email:'mike@gmail.com'},
    {id:3,name:'Femi',email:'femi@gmail.com'},
    {id:4,name:'Ade',email:'ade@gmail.com'},
    {id:5,name:'Ola',email:'ola@gmail.com'},
    {id:6,name:'Mide',email:'mide@gmail.com'}
  ];

  public getusersarray():any[]{
    return this.usersarray;
  }

}
