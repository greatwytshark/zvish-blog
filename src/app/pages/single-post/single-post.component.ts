import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  postDetails: any;
  similarPosts!: Array<any>;
  postId!: string;
  comments!:Array<any>

  constructor(private postService: PostsService, private route: ActivatedRoute, private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(val =>{
      this.postService.viewCount(val['id'])
      this.postId = val['id']
      this.postService.openPost(val['id']).subscribe(data =>{
        this.postDetails = data;
        this.loadRecommendedPosts(this.postDetails.category.categoryId);
      })
    });

    this.loadComments(this.postId);
    
  }

  loadRecommendedPosts(categoryId:any){
    this.postService.loadRecommended(categoryId).subscribe(data =>{
      this.similarPosts = data;
      console.log(this.postId);
      
    });
  }

  loadComments(postId: string){
    this.commentsService.loadComments(postId).subscribe(data =>{
      this.comments = data;
      console.log(this.comments);
      
    })
  }

}
