import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.dev'

@Injectable({
  providedIn: 'root'
})
export class VisitorDetailsService {

  constructor(private httpClient: HttpClient) {
  }

  getVisitorDetailList(){
    const url = environment.VISITOR_BASE_URL
    return this.httpClient.get(url)
  }

  postVisitorDetail(data){
    const url = environment.VISITOR_BASE_URL+'/add'
    return this.httpClient.post(url,data)
  }
}
