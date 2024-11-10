import { Component, EventEmitter, output, Output } from '@angular/core';
import { MaterialModule } from '../../models/material.module';

@Component({
  selector: 'products-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {
  // new
  columnsCountChange = output<number>()
  // old
  // @Output() columnsCountChange =new EventEmitter<number>()
  sort = 'desc'
  itemsShowCount = 12

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count
  }


}
