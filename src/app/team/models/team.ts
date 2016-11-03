import { Observable } from 'rxjs/Observable';

export class Team {
    $key?: string;
    name: string;
    event?: string;
    room?: string;

    event$?: Observable<Event>;
}
