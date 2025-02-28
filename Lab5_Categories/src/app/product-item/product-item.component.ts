import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: any;   //Также как я принимал от апп в хедер, здесь точно также я принимаю от хедера в продакт айтемс.
  @Output() removed = new EventEmitter<any>();

  like(){
    if(!this.product.isLiked){
      this.product.likes += 1;
      this.product.isLiked = true;

    }
    else{
      this.product.likes -=1;
      this.product.isLiked = false;
    }

  }

  remove(){
    console.log('Product before emitting removed event:', this.product);
    this.removed.emit(this.product);
  }

  On(img: string){
    this.product.image = img;
  }
}
