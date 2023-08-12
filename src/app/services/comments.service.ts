import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private aFirestore: AngularFirestore) { }

  addComment(comments: any) {
    this.aFirestore.collection('comments').add(comments)
  }

  loadComments(postId: string) {
    return this.aFirestore.collection('comments', ref => ref.where('postId', '==', postId)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }
}
