import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false // ← Явно указываем (хотя false идёт по умолчанию)

})
export class AppComponent {
  title = 'hhfront';
}