import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-childbehaviourone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './childbehaviourone.component.html',
  styleUrl: './childbehaviourone.component.css'
})
export class ChildbehaviouroneComponent {



  constructor(public conservice:ContactService){}
  public contactarray:any=[];

  ngOnInit() {
    console.log(this.conservice.getContact());


    this.contactarray = this.conservice.getContact();
    console.log(this.contactarray);
    
  }

  updatebehaviour(item: any)
  {
console.log(item);

this.conservice.contactBehaviour.next(item)   
  }
}
