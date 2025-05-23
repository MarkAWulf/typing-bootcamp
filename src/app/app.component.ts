import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { NgIf } from '@angular/common'; 
import { NgFor } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  imports: [RouterOutlet, NgIf, NgFor], 
})
export class AppComponent {
  randomText: string;
  inputValue: string = '';
 
  
constructor() {
  this.randomText = faker.lorem.sentence(); // ✅ assign the sentence to a property
  console.log(this.randomText); // ✅ log it separately  
}

onInputChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.inputValue = input?.value ?? '';
  console.log('User typed:', this.inputValue);
}

compare(randomLetter: string, inputLetter: string) {
  if (!inputLetter) {
    return 'pending';
  }
  return randomLetter === inputLetter ? 'correct' : 'incorrect';
}
}
