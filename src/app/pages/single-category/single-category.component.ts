import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  category!: any;
  categoryPosts!: Array<any>;

  constructor(private postService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(val =>{
      this.postService.loadCategoryPost(val['id']).subscribe(data => {
        this.categoryPosts = data;

    });
    this.category = val['category']

    
    })
  }

}
