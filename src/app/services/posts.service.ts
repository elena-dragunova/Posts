import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Post } from '../models/Post';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://jsonplaceholder.typicode.com';

  getPosts(): Observable<Post[]> {
    const url = `${this.baseUrl}/posts`;
    return this.http.get<Post[]>(url)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  addPost(post: Post): Observable<Post> {
    const url = `${this.baseUrl}/posts`;
    return this.http.post<Post>(url, post)
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
