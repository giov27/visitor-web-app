import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.dev'
import { Observable } from 'rxjs';
import { QueueNumber } from '../models/queue-number'

@Injectable({
  providedIn: 'root'
})
export class QueueNumberService {

  constructor(private httpClient: HttpClient) { }

  queueNumberAdd(body): Observable<QueueNumber>{
    const url = environment.QUEUE_BASE_URL
    return this.httpClient.post<QueueNumber>(url,body)
  }
}
