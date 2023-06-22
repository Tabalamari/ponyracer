import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PonyModel } from './pony-model.interface';


@Component({
    selector: 'ns-greeting',
    template: ` <div>{{ asyncGreeting | async }}</div>
                <div>{{ asyncGreeting }}</div>
                <div *ngIf="asyncUser | async as user">{{ user.name }}</div>
               `,
    standalone: true,
    imports: [AsyncPipe, CommonModule]
})

export class GreetingComponent {
    asyncGreeting = new Promise(resolve => {
        window.setTimeout(
            () => resolve('hello'),
            3000);
    });
    asyncUser = new Promise<PonyModel>(resolve => {
        // after 1 second, the promise will resolve 
        window.setTimeout(() => resolve({ id: 42, name: 'Cédric' }), 4000);
    });
}