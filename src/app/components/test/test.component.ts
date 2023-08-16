import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title: string ="employee detail" ;  
  movies: employee[] =[  
      {employeename:'john',email:'john@hotmail.com',password:'dsrgdsrgdfg',id:'March 4, 2016'},  
      {employeename:'henry',email:'henry@gmail.com',password:'rgrgrg',id:'March 25, 2016'},  
      {employeename:'jack',email:'jack@yahoo.com',password:'drgrgrg',id:'May 6, 2016'},  
      {employeename:'helen',email:'helen@gmail.com',password:'rgrgrgg',id:'May 27, 2016'},  
  ] 
}
class employee {  
  employeename! : string;  
  email! : string;  
  password! : string;  
  id! : string;  
}  

