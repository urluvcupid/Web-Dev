import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, input} from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';


@Component({
  selector: 'app-header',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent{
    @Input() products: any[] = [];      //Здесь я получил данные продактс отт appcomponent
                                      //Теперь products в HeaderComponent содержит те же данные, что были в products в AppComponent.
    @Output() removed = new EventEmitter<any>();

 
  removeProduct(product: any) {
    this.removed.emit(product);
    console.log('productList.removeProduct worked success');
  }
}
