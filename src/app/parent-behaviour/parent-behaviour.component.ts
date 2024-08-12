import { Component } from '@angular/core';
import { ChildbehaviouroneComponent } from '../childbehaviourone/childbehaviourone.component';
import { ChildbehaviourtwoComponent } from '../childbehaviourtwo/childbehaviourtwo.component';

@Component({
  selector: 'app-parent-behaviour',
  standalone: true,
  imports: [ChildbehaviouroneComponent, ChildbehaviourtwoComponent],
  templateUrl: './parent-behaviour.component.html',
  styleUrl: './parent-behaviour.component.css'
})
export class ParentBehaviourComponent {

}
