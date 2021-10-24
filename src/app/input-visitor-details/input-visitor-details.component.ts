import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import  { VisitorDetailsService } from '../services/visitor-details.service'

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {
  outputMessage : any;
  output:any;
  constructor(private visitorDetailService: VisitorDetailsService) {  }

  ngOnInit(): void {
  }
  postVisitorDetail(f:NgForm){
    console.log(f.value);
    this.visitorDetailService.postVisitorDetail(f.value)
      .subscribe((data)=>{
        // console.log(data)
        this.output = data
        this.outputMessage = this.output.message
        }
    )
  }

}
