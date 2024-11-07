import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {

}
