import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MasterResult } from './master-result';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
 

  constructor(private http: HttpClient) { }

  getRedditPosts(): Observable<MasterResult> {
    return this.http.get<MasterResult>('https://www.reddit.com/r/aww/.json');
  }
}
