import { Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private HttpClient: HttpClient) {}
  getfunction(){
    return this.HttpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
  postfunction(data: any){
    return this.HttpClient.post('https://jsonplaceholder.typicode.com/posts',data);
  }
  deletefunction(id: number){
return this.HttpClient.delete('https://jsonplaceholder.typicode.com/posts'+'/'+id);
  }
  putfunction(data: any){
    return this.HttpClient.put('https://jsonplaceholder.typicode.com/posts',data)
  }
}
