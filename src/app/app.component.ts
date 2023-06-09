import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacesComponent } from '../races.component';

@Component({
    selector: 'ns-root',
    standalone: true,
    imports: [RacesComponent, CommonModule],
    template: `<h1>PonyRacer</h1>
            <div [hidden] = "isHidden">Hidden or not</div>
            <div hidden = "{{isHidden}}">Hidden or not</div>
            <p [style.color]="foreground">Friendship is Magic</p>

            <ns-races></ns-races>`,
    styleUrls: ['./app.component.css'],

})
export class AppComponent {
    user = { name: 'Cédric' };
    isHidden: any;
    foreground = "blue";
}
