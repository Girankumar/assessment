import { Component } from '@angular/core';
import { PostService } from './../post.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sharedhome',
  templateUrl: './sharedhome.component.html',
  styleUrls: ['./sharedhome.component.css']
})
export class SharedhomeComponent {
posts!: any;
  
constructor(private PostService: PostService,FormBuilder: FormBuilder){}
submit(){
  this.PostService.getfunction().subscribe(Response => {
    this.posts = Response
    console.log(Response)
  })
}

}
