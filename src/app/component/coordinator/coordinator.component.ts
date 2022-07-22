import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.service'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.scss']
})
export class CoordinatorComponent implements OnInit {
  [x: string]: any;
  myData: any
  active: any
  deactive: any
  id: any
  pipe = new DatePipe('en-US');
  todayWithPipe: any;
  currentdate: any;
  updatime: any;

  changeMe: boolean = true;
  buttonDisabled: boolean = false;



  survey=[
    {
      id: "1",
      title: "Health",
      discription:"Obesity",
      status: 'Activated',
    },
    {
      id: '2',
      title: 'Mavel',
      discription:'Streaming A movie',
      status: 'Deactivated',
    },
    {
      id: '3',
      title: 'Accessories',
      discription:'Marketing for takealot',
      status: 'Deactivated',
    },
    {
      id: '4',
      title: 'Food',
      discription:'Maketing survey for food',
      status: 'Deactivated',
    },
    {
      id: '4',
      title: 'Food',
      discription:'Maketing survey for food',
      status: 'Deactivated',
    }
  ]
  constructor(private surveyList: SurveyService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('user_id')
    // this.getlist();
    this.getactive();
    this.getdeactive();

    this.todayWithPipe = this.pipe.transform(this.updatime,);
  }
  test=true;
  invite(){

  }
//   getlist(){
//     return this.surveyList.getSurveyList(this.id).subscribe({
//       next:data => {
//         this.myData = data
//       }
 
// }) 
//   } 

  // getlist() {
  //   return this.surveyList.getSurveyList(this.id).subscribe({
  //     next: data => {
  //       this.myData = data
  //     }

  //   })
  // }



  getactive() {
    return this.surveyList.activeSurveys(this.id).subscribe({
      next: data => {
        this.active = data;
      }
    });
  }

  getdeactive() {
    return this.surveyList.deactiveSurveys(this.id).subscribe({
      next: data => {
        this.deactive = data
      }
    })
  }


  toogleTag() {
    this.changeMe = !this.changeMe
  }


}
