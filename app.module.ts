import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule}from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { ListTopCandidatesComponent } from './list-top-candidates/list-top-candidates.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCandidateComponent,
    ListCandidateComponent,
    ListTopCandidatesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,HttpClientModule,
    BrowserAnimationsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
