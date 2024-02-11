import { Component } from "@angular/core";



@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{counter}} </h3>

        <button (click)="increaseBy(1)" > +1 </button>
        <button (click)="resetCounter()" > Reset </button>
        <button (click)="increaseBy(-1)" > -1 </button>    
    
    
    `
})
export class CounterComponent {
    public counter: number = 10;

    increaseBy(incrementValue: number): void {
      this.counter += incrementValue;
    }
  
    resetCounter(): void {
      this.counter = 10;
    }
}