import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PonyModel } from './pony-model.interface';
import { OnInitDirective } from './initDirective';

@Component({
    selector: 'ns-pony',
    template: `<div class="pink" (click) ="selectPony()" [initDirective] = "pony">{{ pony.id}} {{ pony.name }}</div>`, 
    standalone: true,
    imports: [ OnInitDirective],
    styles: [
        `.pink {
        color: pink; }
        `],
    encapsulation: ViewEncapsulation.Emulated
})
export class PonyComponent {
    @Input() pony!: PonyModel;
    @Output() readonly ponySelected = new EventEmitter<PonyModel>();


    selectPony(): void {
        this.ponySelected.emit(this.pony);
    }
}