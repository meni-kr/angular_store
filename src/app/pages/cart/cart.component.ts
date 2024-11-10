import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../models/material.module';
import { Cart, CartItem } from '../../models/cart.model';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  
  cart:Cart ={items:[
    {
      product:'https://placehold.co/150',
      name:'snickers',
      price:150,
      quantity:1,
      _id:1
    }
  ]}
  
  dataSource: CartItem[]=[]
  displayedColumns:string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]
  
  ngOnInit(): void {
 this.dataSource = this.cart.items
}

}
