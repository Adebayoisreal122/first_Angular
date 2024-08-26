import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-childprompt',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './childprompt.component.html',
  styleUrl: './childprompt.component.css'
})
export class ChildpromptComponent {
@Input() public msgforomparent= '';

public msgfromchild = '';


@Output() public msgfromchildEvent = new EventEmitter();
sendMsgToParent(){
this.msgfromchildEvent.emit(this.msgfromchild);
this.msgfromchild = '';
}


}
