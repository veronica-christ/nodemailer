import { Component, OnInit } from '@angular/core';

export interface IStudent {
  name: string;
  gender: string;
  country: string;
}

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.scss']
})


export class SurveyResultsComponent implements OnInit {

  students!: IStudent[];

  ngOnInit(): void {
    fetch('./assets/data/students.json').then(res => res.json())
      .then(json => {
        this.students = json;
      });
  }

  

  constructor() { }


  


}
