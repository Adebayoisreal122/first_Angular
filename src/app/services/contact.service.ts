import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }


  public contactBehaviour= new BehaviorSubject<any>({
    name: 'ade',
     phone: '09068918017',
     email: 'ade@gmail.com',
     address: 'Ibadan'
  });


public getContact(){
  return JSON.parse(localStorage.getItem('contactapp')!);
}



}
