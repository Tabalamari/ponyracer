import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule, KeyValue } from '@angular/common';
import { PonyModel } from './pony-model.interface';
import { PonyComponent } from './pony.component';
import { GreetingComponent } from './greeting.component';
import { FromNowPipe } from './from-now.pipe'

@Component({
    selector: 'ns-ponies',
    template: `
    <div><button style = "margin-top: 20px" (click)="refreshPonies()">Refresh</button></div>
    <div>{{ ponies | json }}</div>
    <ul>
       <li *ngFor="let pony of ponies; even as isEven" [style.color] = "isEven ? 'green' : 'black'">{{ pony.name }}</li>
       <ns-pony *ngFor="let currentPony of ponies" [pony]="currentPony" (ponySelected)="betOnPony($event)"></ns-pony>
    </ul>
    <div class="pink">Ffffff</div>
    <div>{{ ponies | slice:0:2 | json }}, "HERE ARE PONIES in an interpolation expression"</div>

    <div *ngFor="let pony of ponies | slice : 0 : 2"> {{pony | json}}"HERE ARE PONIES in an property expression through ngFor"</div>
    <div *ngFor="let pony of ponies | slice : 0 : size"> {{pony | json}}"HERE ARE PONIES in an property expression through ngFor with dynamic argument"</div>
    <p>You can use this to create a dynamic display where your user chooses how many elements she/he wants to see.</p>
    <div *ngFor="let pony of ponies | slice : 0 : 2 as total; index as i">
        "pipe slice" {{ i + 1 }}/{{ total.length }} : {{ pony.name }}
    </div> 

    <p [textContent]="ponies | json">"HERE ARE PONIES in a property expression"</p>
    <p>{{ 'Ninja Squad' | slice:0:5 }}</p>
    
    <ul>
        <p>KEYVALUE</p>
        <p> entry contains  key: number, value: PonyModel  </p>
        <li *ngFor="let entry of poniesMap | keyvalue">{{ entry.key }} - {{ entry.value.name | lowercase }}</li>
    </ul>
            <!-- entry contains { key: PonyModel, value: number } -->
    <div *ngFor="let entry of poniesWithScore | keyvalue : ponyComparator">{{ entry.key.name | uppercase }} - {{ entry.value }}</div>

    <h1>NUMBERS</h1>
    
    <p>{{ 12345 }}</p>
    <p>{{ 12345 | number}}</p>
    <p>{{ 12345 | number: '6.'}}</p>
    <p>{{ 12345 | number:'.2' }}</p>
    <p>{{ 12345.13 | number:'.1-1' }}</p>
    <p>{{ 12345.16 | number:'.1-1' }}</p>
    <p>{{ 12345.12345 | number:'.2-3' }} khglyfuyf</p>
    
    <h1>PERSENT</h1>
    <p>{{ 0.8 | percent }}</p>
    <p>{{ 0.8 | percent:'.3' }}</p>
    <p>{{ 0.8 | percent:'5.' }}</p>

    <h1>CURRENCY</h1>
    <p>{{ 10.6 | currency:'CAD' }}</p>
    <!-- will display 'CA$10.60' -->
    <p>{{ 10.6 | currency:'CAD':'symbol-narrow' }}</p> 
    <!-- will display '$10.60' -->
    <p>{{ 10.6 | currency:'EUR':'code':'.3' }}</p>
    <!-- will display 'EUR10.600' -->

    <p>{{ 10.6 | currency:'UAH':'symbol-narrow' }}</p> 
    <!-- will display '₴10.60' -->
    <p>{{ 10.6 | currency:'UAH':'symbol' }}</p> 
    <!-- will display 'UAH' -->
    <h1>DATE</h1>
    <p>{{ birthday | date:'dd/MM/yyyy' }}</p>
    <p>{{ birthday }}</p>
    <p>{{ birthday | date:'longDate' }}</p>
    <p>{{ birthday | date:'shortDate' }}</p>
    <p>{{ birthday | date:'HH:mm' }}</p>
    <p>{{ birthday | date:'shortTime' }}</p>
    <p>{{ birthday | date:'longTime' }}</p>
    <ns-greeting></ns-greeting>
    <p>{{ "2023-02-10T10:00:00.000Z" | fromNow }}</p>
    `,
    standalone: true,
    imports: [CommonModule, PonyComponent, GreetingComponent, FromNowPipe]
})
export class PoniesComponent {
    size = 2;
    ponies: Array<PonyModel> = [{ id: 1, name: 'Rainbow Dash', speed: 30 }, { id: 2, name: 'Pinkie Pie', speed: 40 }];
    poniesMap = new Map<number, PonyModel>();
    poniesWithScore = new Map<PonyModel, number>();
    birthday = new Date(1979, 5, 13);


    constructor() {
        this.ponies = [{ id: 3, name: 'Fluttershy', speed: 30 }, { id: 4, name: 'Rarity', speed: 30 }]
        this.poniesMap.set(12, { id: 1, name: 'Rainbow Dash', speed: 30 })
        this.poniesMap.set(23, { id: 2, name: 'Grinbow Mash', speed: 30 })
        this.poniesMap.set(54, { id: 3, name: 'Denbow Slash', speed: 30 })
        this.poniesWithScore.set({ id: 4, name: 'Rainbow Dash', speed: 30 }, 430)
        this.poniesWithScore.set({ id: 5, name: 'Rainbow Dash', speed: 30 }, 680)
        this.poniesWithScore.set({ id: 6, name: 'Pinkie Pie', speed: 30 }, 125);
    }

    ponyComparator(a: KeyValue<PonyModel, number>, b: KeyValue<PonyModel, number>): -1 | 0 | 1 {
        if (a.key.name === b.key.name) {
            return 0;
        }
        return a.key.name < b.key.name ? -1 : 1;
    }

    refreshPonies() {
        this.ponies = [{ id: 3, name: 'Fluttershy', speed: 30 }, { id: 4, name: 'Rarity', speed: 30 }]
    }

    betOnPony(pony: PonyModel) {
        console.log("PONY_EVENT")
    }
}

