import { Directive, Input, OnInit } from "@angular/core";
import { PonyModel } from "./pony-model.interface";


@Directive({
    selector: '[initDirective]',
    standalone: true
})
export class OnInitDirective implements OnInit {
   @Input() initDirective!: PonyModel;
   
    ngOnInit(): void {
        console.log(`inputs are ${this.initDirective}`)
    }
    
}