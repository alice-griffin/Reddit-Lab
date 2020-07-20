import { Component, OnInit, Input } from '@angular/core';
import { RedditService } from '../reddit.service';
import { MasterResult } from '../master-result';
import { Result } from '../result';

@Component({
  selector: 'app-singleresult',
  templateUrl: './singleresult.component.html',
  styleUrls: ['./singleresult.component.css']
})
export class SingleresultComponent {

@Input() post: Result; 

  constructor() {
    
  }
  
}

