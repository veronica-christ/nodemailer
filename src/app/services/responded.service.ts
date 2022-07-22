import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class RespondedService {

  constructor(private http:HttpClient) { }

  
  surveyactive(){
    return this.http.get(`${baseURL}`+"surveyactive");
  }
}
