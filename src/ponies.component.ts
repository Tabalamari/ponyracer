import { Component, ViewEncapsulation } from '@angular/core';
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
    </ul>
    <div class="pink">Ffffff</div>
    <div>{{ ponies | slice:0:2 | json }}, "HERE ARE PONIES in an interpolation expression"</div>

    <div *ngFor="let pony of ponies | slice : 0 : 2"> {{pony | json}}"HERE ARE PONIES in an property expression through ngFor"</div>
    <div *ngFor="let pony of ponies | slice : 0 : size"> {{pony | json}}"HERE ARE PONIES in an property expression through ngFor with dynamic argument"</div>
    <!-- <p>You can use this to create a dynamic display where your user chooses how many elements she/he wants to see.</p> -->
    <div *ngFor="let pony of ponies | slice : 0 : 2 as total; index as i">
        {{ i + 1 }}/{{ total.length }}: {{ pony.name }}
    </div>
    <p [textContent]="ponies | json">"HERE ARE PONIES in a property expression"<p>
    <p>{{ 'Ninja Squad' | slice:0:5 }}</p>`,
    standalone: true,
    imports: [CommonModule, PonyComponent],
})
export class PoniesComponent {
    size = 2;
    ponies: Array<PonyModel> = [{ id: 1, name: 'Rainbow Dash' }, { id: 2, name: 'Pinkie Pie' }];
    refreshPonies() {
        this.ponies = [{ id: 3, name: 'Fluttershy' }, { id: 4, name: 'Rarity' }]
    }

    betOnPony(pony: PonyModel) {
        console.log("PONY_EVENT")
    }
}

