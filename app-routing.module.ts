import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { ListTopCandidatesComponent } from './list-top-candidates/list-top-candidates.component';

const routes: Routes = [{component:AddCandidateComponent,path:"add"},{component:ListCandidateComponent,path:"list"},{component:ListTopCandidatesComponent,path:"listtopscorer"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
