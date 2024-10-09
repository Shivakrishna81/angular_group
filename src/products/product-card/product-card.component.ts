import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() public product:any ;

  public router=inject(Router)

  handleViewMore(){
    // console.log(this.product.id)
    this.router.navigateByUrl(`product/${this.product.id}`)
  }

}
