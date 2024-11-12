import { Component, Input, input, output } from '@angular/core';
import { MaterialModule } from '../../models/material.module';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'product-preview',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './product-preview.component.html',
  styleUrl: './product-preview.component.css'
})
export class ProductPreviewComponent {
  fullWidthMode = input<boolean>(false)
  // @Input() fullWidthMode = false;

  addToCart = output<ProductModel>()

  product: ProductModel | undefined ={
    _id: 1,
    title: 'Nike Air Max 90',
    price: 120,
    category: 'shoes',
    description: 'Nike Air Max 90 is a high-performance running shoe. It features a breathable upper and a lightweight design.',
    image: 'https://placehold.co/150'
  }

  onAddToCart() {
   this.addToCart.emit(this.product!)
  }

}
