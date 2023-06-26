import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacesComponent } from '../races.component';
import { PoniesComponent } from "../ponies.component";
import { RaceService } from 'src/race.service';
import { RaceModel } from 'src/race-model.interface';

@Component({
    selector: 'ns-root',
    standalone: true,
    template: `
    <div style = "margin-Bottom: 50px"><h1>PonyRacer</h1>
            <div [hidden] = "isHidden">Hidden or not</div>
            <div hidden = "{{isHidden}}">Hidden or not</div>
            <p [style.color]="foreground">Friendship is Magic</p>

            <ns-races></ns-races>
            <ns-ponies></ns-ponies>
    </div>`,
    styleUrls: ['./app.component.css'],
    imports: [RacesComponent, CommonModule, PoniesComponent]
})
export class AppComponent {
    user = { name: 'Cédric' };
    isHidden: any;
    foreground = "blue";
    races: Array<RaceModel>;
    constructor(private raceService: RaceService) 
    { 
        this.races = this.raceService.list();
    }
}
