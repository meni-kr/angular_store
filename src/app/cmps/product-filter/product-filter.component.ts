import { Component, EventEmitter, output, Output } from '@angular/core';
import { MaterialModule } from '../../models/material.module';

@Component({
  selector: 'product-filter',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent  {

  showCategory= output<string>()
  // @Output() showCategory = new EventEmitter<string>();


  categories = ['shoes','sports']

  // onShowCategory(category:string): void {
  //   this.showCategory.emit(category);
  // }

}
