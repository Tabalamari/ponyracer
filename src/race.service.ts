import { LoggingService } from './logging.service';
import { RaceModel } from './race-model.interface';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RaceService {
    constructor(private loggingService: LoggingService) { }

    list(): Array<RaceModel> {
        this.loggingService.log('race-service: get races');
        return [{name: "Race1"}]
    }
}