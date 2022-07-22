import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseURL = environment.baseURL;

@Injectable({
  providedIn: "root"
})
export class HttpService {
 
  constructor(private http: HttpClient) {}

  


  sendMail(link:any) {
    return this.http.post("http://localhost:7073/email/sendMail",link)}
}
