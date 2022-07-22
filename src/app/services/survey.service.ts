import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SurveyModel } from 'survey-angular';
const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  
  public createSurvey(surveyData: any) {
    return this.http.post(baseURL + '/createSurvey', surveyData);
  }

  getSurveyList(){
     this.http.get(`${baseURL}/surveylist`);
  }

  activeSurveys(survid: string){
    return this.http.get(`${baseURL}status-active/${survid}`);
  }

  deactiveSurveys(survid: string){
    return this.http.get(`${baseURL}status-deactive/${survid}`);
  }
  
  updateStatus(id:any,body:any){
    return this.http.put(`${baseURL}`+"update-status/"+id,body);
  }



  getAllsuv(): Observable<any>{
    return this.http.get<any>(`${baseURL}/surveylist`)
  }

}
