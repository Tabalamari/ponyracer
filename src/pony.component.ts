import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PonyModel } from './pony-model.interface';
@Component({
    selector: 'ns-pony',
    template: `<div click="selectPony">{{ pony.id}} {{pony.name }}</div>`, standalone: true
})
export class PonyComponent {
    @Input() pony!: PonyModel;
    @Output() readonly ponySelected = new EventEmitter<PonyModel>();


    selectPony(): void {
        this.ponySelected.emit(this.pony);
    }
}