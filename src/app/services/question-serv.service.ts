import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})


export class QuestionServService {

  constructor(private http: HttpClient) { }

  public addQuestion(surveyData: any) {
    return this.http.post(baseURL + '/addSurvey', surveyData);
  }

  public addOption(surveyData: any) {
    return this.http.post(baseURL + '/addOption', surveyData);
  }
  
  getAllsuv(): Observable<any>{
    return this.http.get<any>(`${baseURL}/surveylist`)
  }

}
