import { NgFor, CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, input} from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-header',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
    @Input() products: any[] = [];
    @Output() removed = new EventEmitter<any>();

 
  removeProduct(product: any) {
    this.removed.emit(product);
    console.log('productList.removeProduct worked success');
  }
}
