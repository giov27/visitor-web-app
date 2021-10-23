import { Component, OnInit } from '@angular/core';

export interface Transaction {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}
@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {
  displayedColumns = ['id', 'firstName', 'lastName', 'age'];
  transactions: Transaction[] = [
    {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
    {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
    {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
    {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
    {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
    {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
    {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
    {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
    {id: 1, firstName:'Jaya', lastName:'Wijaya', age:20},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    // return this.transactions.map(t => t.id).reduce((acc, value) => acc + value, 0);
    return this.transactions.map(t => t.id).reduce((acc) => acc + 1, 0);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
