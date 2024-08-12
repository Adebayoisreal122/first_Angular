import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})



export class ContactComponent implements OnInit {





  public namei = '';
  public phone = '';
  public email = '';
  public address = '';
  public contactarray: any[] = [];

  public newNamei = '';
  public newPhone = '';
  public newEmail = '';
  public newAddress = '';
  public newContactarray: any[] = [];
  public  newIndex: number | null = null; 


  ngOnInit() {
    const savedContacts = localStorage.getItem('contactapp');
    if (savedContacts) {
      this.contactarray = JSON.parse(savedContacts);
    }
  }







submit(){

  let contactobj= {
    name: this.namei,
    email: this.email,
    phone: this.phone,
    address: this.address,
  }


  this.contactarray.push(contactobj);
  console.log(contactobj);
  localStorage.setItem('contactapp',JSON.stringify(this.contactarray));
  console.log(localStorage['contactapp']);
  
  this.namei="",
  this.phone="",
  this.email="",
  this.address=""

  
}

edit(contact: number){
  this.newNamei = this.contactarray[contact].name;
  this.newPhone = this.contactarray[contact].phone;
  this.newEmail = this.contactarray[contact].email;
  this.newAddress = this.contactarray[contact].address;
  this.newContactarray = this.contactarray[contact];
  this.newIndex = contact;


}


update(){


  if (this.newIndex !== null) {
  let newContactobj= {
    name: this.newNamei,
    email: this.newEmail,
    phone: this.newPhone,
    address: this.newAddress,
  };
 this.contactarray[this.newIndex] = newContactobj;
  localStorage.setItem('contactapp', JSON.stringify(this.contactarray));



  this.newNamei = '';
  this.newPhone = '';
  this.newEmail = '';
  this.newAddress = '';


}

}

deleted(contact: number){
  this.contactarray.splice(contact, 1);
  localStorage.setItem('contactapp', JSON.stringify(this.contactarray));
}
  }
