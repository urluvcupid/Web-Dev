import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',    // Селектор для использования в html
  imports: [RouterOutlet, HeaderComponent],  // -- здесь я как бы регистрирую компонент хедер к эпп компонент 
                                              // imports - это список компонентов, которые Angular должен распознать
  templateUrl: './app.component.html',  // Подключение html-шаблона
  styleUrl: './app.component.css'       // Подключение css-файла
})
export class AppComponent {
  title = 'kaspi-products';
}

