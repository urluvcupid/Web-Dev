import { Params } from './../../node_modules/@types/express-serve-static-core/index.d';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule, ProductItemComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  categories = ['Apple', 'Samsung', 'Xiaomi', 'Google'];

  products: {
    id: number;
    name: string;
    description: string;
    rating: number;
    link: string;
    image: string;
    gallery: string[];
    category: string;
    likes: number;
    isLiked?: boolean;
  }[];
  


  selectedCategory: string | null = null;
  selectedProducts: any[] = [];


  // In app.component.ts, add:
  

  // Sets the currently selected category

  selectCategory(category: string) : void{
    this.selectedCategory = category;
    this.selectedProducts= this.products.filter((product) => product.category === category);
    console.log(this.selectedProducts, this.selectedCategory);
    
  }
  removeProduct(product: any) {
    this.products = this.products.filter((p) => p.id !== product.id);
    this.selectedProducts = this.selectedProducts.filter(
      (p) => p.id !== product.id
    );
    console.log(this.selectedProducts);
    
    console.log('app.removeProduct worked success');
  }


  constructor(private route: ActivatedRoute) {
    this.products = [
      {
        id: 1,
        name: 'Apple iPhone 13',
        description: 'Latest iPhone with A15 Bionic chip.',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hb8/h32/64206209384478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/he8/h1c/64206212857886.jpg?format=gallery-medium'
        ],
        category: 'Apple',
        likes: 0,
      },
      {
          id: 2,
          name: 'Samsung Galaxy S22',
          description: 'Newest Samsung smartphone with dynamic AMOLED display.',
          rating: 4.6,
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-256-gb-chernyi-103667959/?c=750000000',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h6b/86009675218974.png?format=gallery-medium',
          gallery: [
            'https://resources.cdn-kaspi.kz/img/m/p/hd6/h80/86009675251742.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hbb/h9f/86009675317278.png?format=gallery-medium',              'https://resources.cdn-kaspi.kz/img/m/p/h71/hed/86009675382814.png?format=gallery-medium'
            ],
            category: 'Samsung',
            likes: 0,
            },
            {
              id: 3,
              name: 'Apple iPhone 14',
              description: 'Latest iPhone with A15 Bionic chip.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/ha8/h64/86042949713950.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h53/h30/86042949779486.png?format=gallery-medium'
              ],
              category: 'Apple',
              likes: 0,
            },
            {
              id: 4,
              name: 'Apple iPhone 15',
              description: 'Latest iPhone with A16 Bionic chip.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'
              ],
              category: 'Apple',
              likes: 0,
            },
            {
              id: 5,
              name: 'Apple iPhone 16',
              description: 'Latest iPhone with A15 Bionic chip.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h96/ha4/87295491735582.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h3c/h66/87295491768350.png?format=gallery-medium'
              ],
              category: 'Apple',
              likes: 0,
            },
            {
              id: 6,
              name: 'Apple iPhone 16 pro',
              description: 'Latest iPhone with A15 Bionic chip.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/h27/h15/87295490523166.png?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/h27/h15/87295490523166.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/he5/h47/87295490555934.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h46/had/87295490588702.png?format=gallery-medium'
              ],
              category: 'Apple',
              likes: 0,
            },
            {
              id: 7,
              name: 'Samsung Galaxy A55',
              description: 'Newest Samsung smartphone with dynamic AMOLED display.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h14/hea/85428899479582.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/hf7/hd9/85428899610654.png?format=gallery-medium'
              ],
              category: 'Samsung',
              likes: 0,
            },
            {
              id: 8,
              name: 'Galaxy A25 ',
              description: 'Newest Samsung smartphone with dynamic AMOLED display.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h1c/84932692574238.jpg?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/hcf/h1c/84932692574238.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/hc4/h3d/84932660494366.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h23/hb2/84932660690974.png?format=gallery-medium'
              ],
              category: 'Samsung',
              likes: 0,
            },
            {
              id: 9,
              name: 'Samsung Galaxy A06',
              description: 'Newest Samsung smartphone with dynamic AMOLED display.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h84/87014305824798.png?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/hba/h84/87014305824798.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/hdd/h9b/87014305890334.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h4c/h0f/87014305955870.png?format=gallery-medium'
              ],
              category: 'Samsung',
              likes: 0,
            },
            {
              id: 10,
              name: 'Samsung Galaxy S24',
              description: 'Newest Samsung smartphone with dynamic AMOLED display.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/ha1/hfe/84963707256862.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/had/hd9/84963583393822.png?format=gallery-medium'
              ],
              category: 'Samsung',
              likes: 0,
            },
            {
              id: 11,
              name: 'Xiaomi Redmi 13C ',
              description: ' Budget-friendly smartphone offering a powerful performance.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h0f/h2d/84526902837278.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/hb3/h82/84957845717022.jpg?format=gallery-medium'
              ],
              category: 'Xiaomi',
              likes: 0,
            },
            {
              id: 12,
              name: 'Xiaomi Redmi A3',
              description: 'Budget-friendly smartphone offering a powerful performance.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/h96/hb5/85262959706142.png?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/h96/hb5/85262959706142.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h5c/hed/85262959738910.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h7a/h3c/85262959804446.jpg?format=gallery-medium'
              ],
              category: 'Xiaomi',
              likes: 0,
            },
            {
              id: 13,
              name: 'Xiaomi Redmi Note 13 ',
              description: 'Budget-friendly smartphone offering a powerful performance.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/h96/hcf/86897136533534.jpg?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/h96/hcf/86897136533534.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h64/hfe/86897136599070.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/hde/h3d/86897136664606.jpg?format=gallery-medium'
              ],
              category: 'Xiaomi',
              likes: 0,
            },
            {
              id: 14,
              name: 'Xiaomi Redmi Note 14 Pro',
              description: 'Budget-friendly smartphone offering a powerful performance.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/p22/p5f/20049597.jpg?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/p22/p5f/20049597.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p15/pd8/19090625.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p15/pd8/19090625.jpg?format=gallery-medium'
              ],
              category: 'Xiaomi',
              likes: 0,
            },
            {
              id: 15,
              name: 'Xiaomi 13 Ultra 5G',
              description: 'Budget-friendly smartphone offering a powerful performance.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/he9/h70/81334557736990.jpg?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/he9/h70/81334557736990.jpg?format=gallery-medium',
                'https://avatars.mds.yandex.net/i?id=bca8b05b2e59f0396254fdd453daa7c01cfc2d4d-4914317-images-thumbs&n=13',
                'https://avatars.mds.yandex.net/i?id=8d644378ee0a8d0c63bd7f6bc2a877e0f5c1d0da-6380060-images-thumbs&n=13'
              ],
              category: 'Xiaomi',
              likes: 0,
            },
            {
              id: 16,
              name: 'Google Pixel 9',
              description: 'a flagship smartphone known for its pure Android experience.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/hb5/86896485400606.png?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/h3a/hb5/86896485400606.png?format=gallery-medium',
              ],
              category: 'Google',
              likes: 0,
            },
            {
              id: 17,
              name: 'Google Pixel 8a',
              description: 'a flagship smartphone known for its pure Android experience.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h1b/86005320450078.jpg?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/h57/h1b/86005320450078.jpg?format=gallery-medium',
              ],
              category: 'Google',
              likes: 0,
            },
            {
              id: 18,
              name: 'Google Pixel 8 Pro',
              description: 'a flagship smartphone known for its pure Android experience.',
              rating: 4.8,
              link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
              image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/hc9/84326216630302.jpg?format=gallery-medium',
              gallery: [
                'https://resources.cdn-kaspi.kz/img/m/p/hd1/hc9/84326216630302.jpg?format=gallery-medium',
                
              ],
              category: 'Google',
              likes: 0,
            },
           
    ];
    
  }
  ngOnInit(): void {
      
  }
}