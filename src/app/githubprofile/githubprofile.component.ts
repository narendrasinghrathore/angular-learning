import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.scss']
})
export class GithubprofileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  
  this.route.paramMap.subscribe(params =>{
    console.log(params);
  });

}
}