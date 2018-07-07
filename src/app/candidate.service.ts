import { Injectable } from '@angular/core';
import {Candidate} from './candidate';
import {CANDIDATES} from './mock-candidates';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private messageService: MessageService) { }

  getCandidates(): Observable<Candidate[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(CANDIDATES);
  }
}
