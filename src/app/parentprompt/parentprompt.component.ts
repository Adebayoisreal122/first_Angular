import { Component } from '@angular/core';
import { ChildpromptComponent } from '../childprompt/childprompt.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parentprompt',
  standalone: true,
  imports: [ChildpromptComponent, FormsModule],
  templateUrl: './parentprompt.component.html',
  styleUrl: './parentprompt.component.css'
})
export class ParentpromptComponent {



  public message: string = '';
  public childMessage: string = '';
  public messageToChild: string = '';  
  
recieveMsg(data: any){
  this.childMessage = data;
  // console.log(data);
  // console.log(this.childMessage);
}

  sendMsg(){
    this.messageToChild = this.message;  
    this.message = '';
  }
}
