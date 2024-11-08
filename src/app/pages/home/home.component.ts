import { Component, input } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { ProductsHeaderComponent } from "../../cmps/products-header/products-header.component";
import { ProductFilterComponent } from "../../cmps/product-filter/product-filter.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    MaterialModule,
    ProductsHeaderComponent, 
    ProductFilterComponent, 
    ProductFilterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cols = 3
  category: string |undefined

  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory

  }

}
