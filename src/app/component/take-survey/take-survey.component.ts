import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.scss']
})
export class TakeSurveyComponent implements OnInit {
  isSubmitted = false;
  constructor(public fb: FormBuilder) { }

  
  ngOnInit(): void {
    
  }


  questions = [
    {
      question: 'how are you?',
    option: {
      one: "Owky",
      two: "Good",
      three: "Great"
    }
    },

    {
      question: 'how old are you ?',
      option: {
      one:15,
      two: 20,
      three: 25
    }

    },
    
    {
      question: 'where are you from?',
      option: {
      one: "Jhb",
      two: "Pta",
      three: "Pta"
    }
    },

    {
      question: 'who are your friends?',
      option: {
      one: "John",
      two: 'Smith',
      three: "Willie"
    }
    },

    {
      question: 'friends age range?',
      option: {
      one: 15-20,
      two: 21 - 25,
      three: 26 - 30
    }
    }
    
  ]

  registrationForm = this.fb.group({
    gender: [''],
  
  });
  get myForm() {
    return this.registrationForm.get('gender');
  }


  
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      return alert(JSON.stringify(this.registrationForm.value));
    }
  }
  }






function value(value: any, any: any) {
  throw new Error('Function not implemented.');
}


