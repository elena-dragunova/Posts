import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  error: any;

  constructor(private postsService: PostsService) { }

  ngOnInit() {

    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe(
        posts => this.posts = posts,
        error => {
          this.error = error.message;
        }
      );
  }

  newPost(post: Post): void {
    this.posts.unshift(post);
  }

  deletePost(postId: number) {
    this.postsService.deletePost(postId)
      .subscribe(
        () => {
          const ind = this.posts.findIndex(post => post.id === postId);
          this.posts.splice(ind, 1);
        },
        error => {
          this.error = error.message;
        }
      );
  }
}
