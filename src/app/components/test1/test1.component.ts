import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  constructor(private FormBuilder: FormBuilder){}
  submitform = this.FormBuilder.group({
    FirstName: [''],
    LastName: [''],
    Occupation:[''],
    PhoneNo:['']
  })
  
}
