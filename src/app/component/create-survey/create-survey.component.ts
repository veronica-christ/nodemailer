import { Component, OnInit } from '@angular/core';
import { SurveyCreator } from 'survey-creator-knockout';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

import { OtherEmptyError } from 'survey-angular';
import { Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';
import { ServeyModel } from 'src/app/models/serveryModel';
import { QuestionServService } from 'src/app/services/question-serv.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss'],
})
export class CreateSurveyComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private survQueation: SurveyService,
    private questionServService: QuestionServService,
    private router: Router
  ) { }

  counter: number = 0;
  qs: any[] = [];
  list: any[] = [];
  x = {};
  v = {};
  q: any;

  serve = {};

  isDisable: boolean = false;
  isSuccessful = false;

  Form = new FormGroup({
    title: new FormControl(''),
    Decription: new FormControl(''),
    Code: new FormControl(''),
    usertype: new FormControl(''),
    question: new FormControl(''),
    Option1: new FormControl(''),
    Option2: new FormControl(''),
    Option3: new FormControl(''),
  });
  submitted = false;

invite=false;
  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      title: ['', Validators.required],
      Decription: ['', Validators.required],
      Code: ['', Validators.required],
      usertype: ['', Validators.required],
      question: ['', Validators.required],
      options: ['', [Validators.required]],
      Option1: ['', Validators.required],
      Option2: ['', Validators.required],
      Option3: ['', Validators.required],
    });

    this.getList();
    console.log(this.serve);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.Form.controls;
  }

  questions: any;

  onSubmit() {
    Swal.fire({
      title: 'Do you want to submit the survey?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      confirmButtonColor: '#011345',
      cancelButtonText: `Cancel`,
      cancelButtonColor: 'red'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Submitted', '', 'success')
        this.router.navigateByUrl('/coordinator')
      } else if (result.dismiss == Swal.DismissReason.cancel) {
        Swal.fire('Survey cancelled', '', 'error')
      }
    })


    this.questionServService.addQuestion(this.serve).subscribe(err => {
      console.log("this" + err.toString())
    })
    //  this.survQueation.createSurvey(this.serve).subscribe(
    //     (resp) => {
    //       console.log(resp);

    //       this.Form.reset();

    //       // localStorage.getItem("myArray")
    //     },
    //     (err) => {
    //       console.log(' yohhhh' + err);
    //     }
    //   );
    //   console.log(this.v);
  }

  save() {
    this.submitted = true;
    let user = {
      title: this.Form.value.title,
      Decription: this.Form.value.Decription,
      usertype: this.Form.value.usertype,
      question: this.Form.value.question,
      Option1: this.Form.value.Option1,
      Option2: this.Form.value.Option2,
      Option3: this.Form.value.Option3,
    }

    // if (confirm('Are you sure you want to save?')) {
    //   // Save it!
    //   this.isDisable = true;
    //   this.questions = user
    //   window.localStorage.setItem("myObject", JSON.stringify(user));
    //   console.log(this.questions);
    //   console.log('Thing was saved to the database.');
    // } else {

    //   // Do nothing!
    //   console.log('Thing was not saved to the database.');
    // }
    if (this.Form.value.Option1 === "") {
      // if (this.Form.value.Option2 =="") {
      // if (this.Form.value.Option3 =="") {
      Swal.fire(
        'Please fill in all Options',
        'Options please'
      );
      return false
      //   }
      // }
    }
    // else 
    // if(this.Form.value.Option1 !==null){
    //   Swal.fire(
    //     'Please fill in all Options',
    //     'Options please'
    //   );
    // }
    //  else
    //  if(this.Form.value.Option2 !==null){
    //   Swal.fire(
    //     'Please fill in all Options',
    //     'Options please'
    //   );
    // }
    // else
    // if(this.Form.value.Option3 !==null){
    //   Swal.fire(
    //     'Please fill in all Options',
    //     'Options please'
    //   );
    // }
    else {
      this.isDisable = true;
      this.questions = user
      window.localStorage.setItem("myObject", JSON.stringify(user));
      console.log(this.questions);
      Swal.fire()

        this.counter++;

      if (this.Form.value.Option1 == '') {
        if (this.Form.value.Option2 == '') {
          if (this.Form.value.Option3 == '') {
            Swal.fire('Please fill in all Options', 'Options please');
          }
        }
      } else {
        let v = {
          one: this.Form.value.Option1,
          two: this.Form.value.Option2,
          three: this.Form.value.Option3,
        };
        // let user = {
        //   // title: this.Form.value.title,
        //   Decription: this.Form.value.Decription,
        //   usertype: this.Form.value.usertype,
        //   question: this.Form.value.question,
        //   options: this.Form.value.options,
        //   Option1: this.Form.value.Option1,
        //   Option2: this.Form.value.Option2,
        //   Option3: this.Form.value.Option3,
        // };
        // this.qs.push(user);
        this.serve = {
          title: this.Form.value.title,
          Decription: this.Form.value.Decription,
          Code: this.Form.value.Code,
          usertype: this.Form.value.usertype,
          question: this.Form.value.question,
          options: v,
        };

        const inc = this.counter.toString();
        localStorage.setItem(inc, JSON.stringify(this.serve));

        this.Form.controls['Option1'].reset();
        this.Form.controls['Option2'].reset();
        this.Form.controls['Option3'].reset();
        this.Form.controls['question'].reset();
        Swal.fire(
          'Question successfully added',
          'Question and answers added. You may proceed to add another question'
        );

      }

      this.Form.controls['Option1'].reset();
      this.Form.controls['Option2'].reset();
      this.Form.controls['Option3'].reset();
      this.Form.controls['question'].reset();
      return true;

    };

    

  }getList() {
      return this.survQueation.getAllsuv().subscribe((data: any) => {
        this.x = (data);
        console.log(data);
      });
    }
}