import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../models/material.module';
import { Cart, CartItem } from '../../models/cart.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cart: Cart = {
    items: [
      {
        product: 'https://placehold.co/150',
        name: 'snickers',
        price: 150,
        quantity: 1,
        _id: 1
      },
      {
        product: 'https://placehold.co/150',
        name: 'snickers',
        price: 150,
        quantity: 1,
        _id: 2
      },
    ]
  }

  dataSource: CartItem[] = []
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ]
  total: number = 0

  ngOnInit(): void {
    this.dataSource = this.cart.items
    this.getTotal()

  }

  getTotal() {
    this.total = this.cart.items
      .map(item => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0)
  }

}
