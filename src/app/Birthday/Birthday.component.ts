import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-birthday',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
   <div class="card">
        <img src="../../assets/image/butki.jpg" alt="Birthday Image" class="birthday-image" >
        <h1>Happy Birthday Butki!</h1>
        <p>Wishing you a day filled with love, joy, and happiness. May all your dreams come true!</p>
    </div>
  `,
  styleUrl: './Birthday.component.css',

})
export class BirthdayComponent { }
