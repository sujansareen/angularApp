import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidates/candidates.component';

import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [// no need to place any providers due to the `providedIn` flag...
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
