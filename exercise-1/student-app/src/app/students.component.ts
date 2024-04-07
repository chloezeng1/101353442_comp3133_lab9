// src/app/students.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  template: `
    <div>
      <h2>{{ getTitle() }} - {{ getCurrentDate() }}</h2>
      Students Component
    </div>
  `,
  standalone: true
})
export class StudentsComponent {
  title = 'Student List';

  getTitle(): string {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toDateString();
  }
}
