import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'ns-root',
    standalone: true,
    imports: [CommonModule],
    template: `<h1>PonyRacer</h1>
                <h2>Welcome {{ user.name }}</h2>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    user = { name: 'Cédric' };
}
