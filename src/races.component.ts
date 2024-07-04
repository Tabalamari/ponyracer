import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceService } from './race.service';
@Component({
    selector: 'ns-races',
    template: `<div *ngIf="races.length > 0; else empty">
                    <h2>Races</h2>
                    <ul>
                        <li *ngFor="let race of races; index as i">{{i}} - {{ race.name }}</li>
                    </ul>
               </div>

    <ng-template #empty><h2>No races.</h2></ng-template>
    <button (click)="refreshRaces()">Refresh the races list</button>
    <p>{{ races.length }} races</p>
    <button (click)="firstName = 'Cédric'; lastName = 'Exbrayat'"> Click to show name Cédric Exbrayat
    </button>

    <p>{{ firstName }} {{ lastName }}</p>
    <div [ngSwitch]="messageCount">
        <p *ngSwitchCase="0">You have no message</p>    
        <p *ngSwitchCase="1">You have a message</p>
        <p *ngSwitchDefault>You have some messages</p>
    </div>
    <div (click)="onButtonClick($event)"> <button>Click me!</button>
    <textarea (keydown.space)="onSpacePress()">Press space!</textarea>
    <textarea (keydown.space)="onSpacePress1($event)">Press space!</textarea>
    </div>

<div style = "margin: 10px; padding: 10px; background-color: blue" (click)="bubbling()"> 
    <div style = "margin: 10px; padding: 10px; background-color: red"(click)="stopBubbling($event)">
        <button (click)="buttonClick()">Bubble!</button>
    </div>
</div>
<div style = "margin: 10px; padding: 10px; background-color: green" [id] = "getId()" (click)="clickDivId()">

</div>
<input type="text" #name>
<button (click)="name.focus()">Focus the input</button>
<button (click)="fokusPokus(name)">Focus the input</button>
<div>{{races| json}}</div>
`,
    standalone: true,
    imports: [CommonModule],

})
export class RacesComponent {
    races: Array<RaceModel> = [];
    firstName: string = "";
    lastName: string = "";
    messageCount = "";
    constructor(private raceService: RaceService) 
    { 
        this.races = this.raceService.list();
    }

    refreshRaces(): void {
        this.races = [{ name: 'London' }, { name: 'Lyon' }];
    }
    onButtonClick(event: Event) {
        console.log(event);
    }
    onSpacePress(): void {
        console.log("Space")
    }
    onSpacePress1(event: Event): void {
        console.log(event, "Space1")
    }
    bubbling() {
        console.log("This is bubbling!!")
    }
    stopBubbling(event: Event) {
        // event.preventDefault(); event.stopPropagation();
        console.log("2")
    }
    buttonClick() {
        console.log("1")
    }
    getId() {
        console.log("myLoveId_console.log")
        return "myLoveId"
    }
    clickDivId() {
        console.log("Get Id")
    }
    fokusPokus(elem: HTMLInputElement) {
        elem.focus()
    }
}

interface RaceModel {
    name: string
}