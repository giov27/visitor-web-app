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
