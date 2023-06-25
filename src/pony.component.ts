import { Component, EventEmitter, Input, Output, ViewEncapsulation, Inject, LOCALE_ID } from '@angular/core';
import { PonyModel } from './pony-model.interface';
import { OnInitDirective } from './initDirective';
import { formatNumber } from '@angular/common';


@Component({
    selector: 'ns-pony',
    template: `<div class="pink" (click) ="selectPony()" [initDirective] = "pony">{{ pony.id}} {{ pony.name }}</div>
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, sint!</div>
    <p>{{ formattedSpeed }}, "we use the formatNumber function"</p>`,
    standalone: true,
    imports: [OnInitDirective],
    styles: [
        `.pink {
            color: pink;
        }
        `,
        `* {
            color: green;
        }
        `
    ],
    encapsulation: ViewEncapsulation.Emulated
})
export class PonyComponent {
    @Input() pony!: PonyModel;
    // pony: PonyModel = {id: 345, name: "Adfrty Ksdb", speed: 28}
    @Output() readonly ponySelected = new EventEmitter<PonyModel>();
    formattedSpeed: string;

    constructor(@Inject(LOCALE_ID) locale: string) {
        // use the format function
        this.formattedSpeed = formatNumber(this.pony.speed, locale, '.2');
    }

    selectPony(): void {
        this.ponySelected.emit(this.pony);
    }

}