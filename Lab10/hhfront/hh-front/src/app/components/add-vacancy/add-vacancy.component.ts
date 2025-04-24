import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vacancy } from '../../models/vacancy';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.css'],
  standalone: false  // ← Явно отключаем

})
export class AddVacancyComponent {
  vacancy: Vacancy = {
    name: '',
    description: '',
    salary: 0,
    company_id: 0,
    id: 0
  };


  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      
      this.apiService.addVacancy(this.vacancy).subscribe({
        next: (data: any) => console.log('Vacancy added successfully!', data) ,
        error: (error: any) => console.error('Error adding vacancy', error)
      });
      this.router.navigate(['vacancies'])

    }
  }
}