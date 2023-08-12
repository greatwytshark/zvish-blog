import { Component, OnInit } from '@angular/core';
import { Subform } from '../models/subform';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  subscribed:boolean = false;

  constructor(private subService: SubscribersService) { }

  ngOnInit(): void {
  }

  onSubmit(formValue: any){
    const subscriptionData: Subform = {
      name: formValue.name,
      email: formValue.email
    }
    this.subService.checkSub(formValue.email).subscribe(data =>{
      if(data.empty){
        this.subService.addSub(subscriptionData);
        this.subscribed = true;
      }else{
        console.log('email address already in use');
        
      }
    })
  }

}
