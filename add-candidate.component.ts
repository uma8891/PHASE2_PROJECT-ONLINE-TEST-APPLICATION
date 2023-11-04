import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OnlinetestserviceService } from '../onlinetestservice.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  alert: boolean = false;
  addCandidate = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    score: new FormControl('')
  });
  constructor(private onlinetest: OnlinetestserviceService) { }

  ngOnInit(): void {
  }
  collectCandidates() {
    //console.log(this.addResto.value)
    this.onlinetest.saveCandidate(this.addCandidate.value).subscribe((result) => {
      console.warn("The result is here", result)
    })
    this.alert=true
    //to clear the form
    this.addCandidate.reset({})
  }
  closeAlert()
  {
    this.alert=false;
  }
}