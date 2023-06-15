import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PonyModel } from './pony-model.interface';
import { PonyComponent } from './pony.component';

@Component({
    selector: 'ns-ponies',
    template: `
    <div><button style = "margin-top: 20px" (click)="refreshPonies()">Refresh</button></div>
    <ul>
       <!-- <li *ngFor="let pony of ponies; even as isEven" [style.color] = "isEven ? 'green' : 'black'">{{ pony.name }}</li> -->
       <ns-pony *ngFor="let currentPony of ponies" [pony]="currentPony" (ponySelected)="betOnPony($event)"></ns-pony>
    </ul>`,
    standalone: true,
    imports: [CommonModule, PonyComponent]
})
export class PoniesComponent {

    ponies: Array<PonyModel> = [{ id: 1, name: 'Rainbow Dash' }, {id: 2, name: 'Pinkie Pie' }];
    refreshPonies() {
        this.ponies = [{ id: 3, name: 'Fluttershy'}, { id:4, name: 'Rarity'}]
    }

    betOnPony(pony: PonyModel) {
        console.log("PONY_EVENT")
    }
}

