import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServicesService } from '../services/product-services.service';

@Component({
  selector: 'app-display-grocery',
  standalone: true,
  imports: [],
  templateUrl: './display-grocery.component.html',
  styleUrl: './display-grocery.component.css'
})
export class DisplayGroceryComponent {

constructor(public route: ActivatedRoute,
  public productService: ProductServicesService
) { }


ngOnInit() :void {
  // console.log(this.route.snapshot.paramMap.get('product-name'));
 
  this.productService.getUsers().subscribe(user => console.log(user));

 }



}
