import { Component, Input, input } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';

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

}
