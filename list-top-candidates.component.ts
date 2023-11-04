import { Component, OnInit } from '@angular/core';
import { OnlinetestserviceService } from '../onlinetestservice.service';

@Component({
  selector: 'app-list-top-candidates',
  templateUrl: './list-top-candidates.component.html',
  styleUrls: ['./list-top-candidates.component.css']
})
export class ListTopCandidatesComponent implements OnInit {

  
  constructor(private onlinetest1: OnlinetestserviceService) { }
  collection: any = [];
  ngOnInit(): void {

    this.onlinetest1.getList().subscribe(result => {

      //Array.of converts object into array
      this.collection = Array.of(result);
    })
  }
  deleteCandidate(item:number) {
    this.collection.splice(item - 1, 1)
    this.onlinetest1.deleteCandidate(item).subscribe(result => {
      console.warn("result", result)
      //we call the below code to get updated list
      this.onlinetest1.getList().subscribe(result => {
        //Array.of converts object into array
        this.collection = Array.of(result);
        //console.warn(this.collection[0])
      })
    })
  }

}
