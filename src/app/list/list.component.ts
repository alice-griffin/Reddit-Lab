import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { Result } from '../result';
import { MasterResult } from '../master-result';
import { Data } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  posts: Result[];

  constructor(private redditService: RedditService) { }

  ngOnInit(): void {
  
  this.redditService.getRedditPosts().subscribe((data: MasterResult) => {
    this.posts = data.data.children;

    }); 
}
}
