import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  post: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe((response: any) => {
        this.post = response;
      })

  }
  createPost(input: HTMLInputElement) {
    let post = { title: input.value , id :''};
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe((response: any) => {
        post['id'] = response.id;
        this.post.splice(0, 0, post);
      });
  }
}
