import { Component, OnInit, Input, } from '@angular/core';
import { RedditService } from './reddit.service'
import { MasterResult } from './master-result'
import { Result } from './result'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'paupers-reddit';

  subreddit: string; 

  constructor(private redditService: RedditService) {}

  ngOnInit() {} 
}
