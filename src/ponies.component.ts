import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common';

@Component({
    selector: 'ns-ponies',
    template: ``,
    standalone: true, 
    imports: [CommonModule]
})
export class PoniesComponent { 

    ponies: Array<PonyModel> = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];

}

interface PonyModel { name: string }