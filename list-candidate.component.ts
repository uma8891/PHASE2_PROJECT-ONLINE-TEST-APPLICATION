import { Component, OnInit } from '@angular/core';
import { OnlinetestserviceService } from '../onlinetestservice.service';

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.css']
})
export class ListCandidateComponent implements OnInit {

  

  constructor(private onlinetest1: OnlinetestserviceService) { }
  collection: any = [];
  ngOnInit(): void {

    this.onlinetest1.getList().subscribe(result => {

      //Array.of converts object into array
      this.collection = Array.of(result);
    })
  }
  deleteCandidate(item:number) {
    // splice() method adds and/or removes array elements.
    //array.splice(index, howmany, item1, ....., itemX)
    //index ->Required,The position to add/remove items.
    //howmany->Optional,Number of items to be removed.
    //item1, ..., itemX->Optional,New elements(s) to be added.
    //Since array indexing starts at 0 , so if id=1,postion=0(i.e id-1)
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
