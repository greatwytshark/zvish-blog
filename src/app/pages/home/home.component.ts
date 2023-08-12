import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredPostArray!: Array<any>;
  latestPosts!: Array<any>

  constructor(private postService: PostsService) {   }

  ngOnInit(): void {
    this.postService.loadFeatured().subscribe(data => {
      this.featuredPostArray = data;

    })

    this.postService.loadLatest().subscribe(data =>{
      this.latestPosts = data;
    })
  }

}
