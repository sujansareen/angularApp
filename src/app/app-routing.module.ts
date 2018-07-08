import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CandidatesComponent} from './candidates/candidates.component';

const routes: Routes = [
  {path: 'candidates', component: CandidatesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
