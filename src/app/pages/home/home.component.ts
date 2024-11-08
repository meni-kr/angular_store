import { Component, input } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { ProductsHeaderComponent } from "../../cmps/products-header/products-header.component";
import { ProductFilterComponent } from "../../cmps/product-filter/product-filter.component";


const ROWS_HEIGHT:{[id:number]:number} ={1:400,3:335,4:350}

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
  rowHeight = ROWS_HEIGHT[this.cols]
  category: string |undefined

  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory

  }

}
