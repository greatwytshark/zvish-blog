import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private aFirestore: AngularFirestore) { }

  addSub(subDetails: any){
    this.aFirestore.collection('subscribers').add(subDetails)
  }

  checkSub(subEmail:string){
    return this.aFirestore.collection('subscribers', ref => ref.where('email', '==', subEmail)).get()
  }
}
