import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacesComponent } from '../races.component';
import { PoniesComponent } from "../ponies.component";

@Component({
    selector: 'ns-root',
    standalone: true,
    template: `<h1>PonyRacer</h1>
            <div [hidden] = "isHidden">Hidden or not</div>
            <div hidden = "{{isHidden}}">Hidden or not</div>
            <p [style.color]="foreground">Friendship is Magic</p>

            <ns-races></ns-races>
            <ns-ponies></ns-ponies>`,
    styleUrls: ['./app.component.css'],
    imports: [RacesComponent, CommonModule, PoniesComponent]
})
export class AppComponent {
    user = { name: 'Cédric' };
    isHidden: any;
    foreground = "blue";
}
