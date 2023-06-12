import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'ns-ponies',
    template: `
    <div><button style = "margin-top: 20px" (click)="refreshPonies()">Refresh</button></div>
    <ul>
       <li *ngFor="let pony of ponies; even as isEven" [style.color] = "isEven ? 'green' : 'black'">{{ pony.name }}</li>
    </ul>`,
    standalone: true,
    imports: [CommonModule]
})
export class PoniesComponent {

    ponies: Array<PonyModel> = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];
    refreshPonies() {
        this.ponies = [{ name: 'Fluttershy'}, {name: 'Rarity'}]
    }
}

interface PonyModel { name: string }