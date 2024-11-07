import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'products-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {
  sort='desc'

  onSortUpdated(newSort: string):void{
    this.sort = newSort;
  }

}
