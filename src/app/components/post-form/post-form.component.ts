import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPostEvent = new EventEmitter();

  post: Post = {
    title: '',
    body: '',
    id: 0,
  };
  error: any;
  newPost: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  addPost(postData: Post) {
    this.postsService.addPost(postData)
      .subscribe(
        post => {
          this.newPost = post;
          this.newPostEvent.emit(post);
        },
        error => {
          this.error = error.message;
        }
      );
  }
}
