import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
 
  @Input() postId!: string;

  constructor(private commentService: CommentsService) { }

  ngOnInit(): void {
  }

  onSubmit(formValue: any){
    
    
    const commentData: Comment = {
      postId: this.postId,
      name: formValue.name,
      comment: formValue.comment,
      createdAt: new Date()
    }
    this.commentService.addComment(commentData);
    
    
  }

  

}
