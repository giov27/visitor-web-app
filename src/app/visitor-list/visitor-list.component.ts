import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { VisitorDetailsService } from '../services/visitor-details.service';
@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})

export class VisitorListComponent implements OnInit {
  visitorDetailResult: any;
  visitorDetailList:any;

  displayedColumns = ['id', 'firstName', 'lastName', 'age'];
  // transactions: Transaction[] = [
  //   {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
  //   {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
  //   {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
  //   {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
  //   {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
  //   {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
  //   {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
  //   {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
  //   {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
  // ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    // return this.transactions.map(t => t.id).reduce((acc, value) => acc + value, 0);
    // return this.transactions.map(t => t.id).reduce((acc) => acc + 1, 0);
    return '10';
  }
  constructor(private visitorDetailService: VisitorDetailsService) { }

  ngOnInit(): void {
    this.getVisitorDetailList()
  }

  getVisitorDetailList(){
    this.visitorDetailService.getVisitorDetailList().subscribe((data:any)=>{
      this.visitorDetailResult = data;
      this.visitorDetailList = this.visitorDetailResult.results;
      console.log(this.visitorDetailList);
    })
  }



}
