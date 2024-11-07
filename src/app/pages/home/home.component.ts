import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { ProductsHeaderComponent } from "../../cmps/products-header/products-header.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [MaterialModule, ProductsHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
