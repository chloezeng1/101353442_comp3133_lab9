// src/app/app.component.ts
import { Component } from '@angular/core';
import { StudentsComponent } from './students.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [StudentsComponent],
  standalone: true 
})
export class AppComponent {
  title = 'student-app';
}
