import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

import * as firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private aFirestore: AngularFirestore) { }

  loadFeatured() {
    return this.aFirestore.collection('posts', ref => ref.where('isFeatured', '==', true).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }

  loadLatest(){
    return this.aFirestore.collection('posts', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }

  loadCategoryPost(categoryId: string){
    return this.aFirestore.collection('posts', ref => ref.where('category.categoryId', '==', categoryId)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }

  openPost(postId: string){
    return this.aFirestore.doc(`posts/${postId}`).valueChanges();
  }

  loadRecommended(categoryId: string){
    return this.aFirestore.collection('posts', ref => ref.where('category.categoryId', '==', categoryId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }

  viewCount(postId: string){
    const countViews = {
      views: firebase.default.firestore.FieldValue.increment(1)
    }

    this.aFirestore.doc(`posts/${postId}`).update(countViews);
  }
}
