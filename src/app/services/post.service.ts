import { Post } from './../models/post';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private url = 'https://my-json-server.typicode.com/orzel-bielik/test/posts';

    constructor(private http: HttpClient) { }

    get(): Observable<Post[]> {
        return this.http.get<Post[]>(this.url);
    }
}
