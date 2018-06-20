import { Component, OnInit } from '@angular/core';
import {Candidate} from '../candidate';
import { CANDIDATES } from '../mock-candidates';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  candidates = CANDIDATES;
  selectedCandidate: Candidate;

  constructor() { }

  ngOnInit() {
  }

  onSelect(candidate: Candidate): void {
    this.selectedCandidate = candidate;

  }

}
