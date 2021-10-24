import { Component, OnInit } from '@angular/core';
import{ QueueNumberService } from '../services/queue-number.service'
import{ HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.dev'

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css']
})
export class RequestQueueNumberComponent implements OnInit {
  queueNumberResult: any;
  queueNumberFinal:any;
  queueNum:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // window.print()
    // this.queueNumberAdd()
    this.http.post<any>(environment.QUEUE_BASE_URL, '').subscribe(data=>{
      console.log(data)
      this.queueNum = data.queueNumObj
    })

  }
}
