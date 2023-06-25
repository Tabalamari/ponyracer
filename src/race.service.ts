import { LoggingService } from './logging.service';
export class RaceService {
    constructor(private loggingService: LoggingService) { }

    list(): Array<RaceModel> {
        this.loggingService.log('race-service: get races');
    }
}