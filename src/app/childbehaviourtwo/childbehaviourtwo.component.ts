import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-childbehaviourtwo',
  standalone: true,
  imports: [],
  templateUrl: './childbehaviourtwo.component.html',
  styleUrl: './childbehaviourtwo.component.css'
})
export class ChildbehaviourtwoComponent {


  constructor(public contactservice: ContactService) { }
  public contactobj:any ={}

  //console.log(this.contactservice.contactobj);

ngOnInit() {
  
  this.contactservice.contactBehaviour.subscribe(data=>{
    console.log(data);
    
    this.contactobj=data;
  
  })
}

}
