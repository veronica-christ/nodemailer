import { Component, OnInit } from '@angular/core';
import { RespondedService } from 'src/app/services/responded.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-respond-home',
  templateUrl: './respond-home.component.html',
  styleUrls: ['./respond-home.component.scss']
})
export class RespondHomeComponent implements OnInit {
  mydata: any;
  submitted = false;
  title = '';

  constructor(private responded: RespondedService) {}
  ngOnInit(): void {
    this.getstatus();
  }

  getstatus(){
    return this.responded.surveyactive().subscribe({
      next:data =>{
        this.mydata = data
        console.log(data)
      }
    })
  }
}
