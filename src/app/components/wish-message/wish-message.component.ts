import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-message',
  templateUrl: './wish-message.component.html',
  styleUrls: ['./wish-message.component.css']
})
export class WishMessageComponent implements OnInit {

  public message: string = "Hello";
  constructor() { }

  ngOnInit(): void {
  }


  public updateMessage(mesg:string):void{
    this.message = mesg;
  }

  public sayGoodAfternoon():void{
    this.message =  "Good Afternoon";
  }

  public sayGoodMorning():void{
    this.message = "Good Morning";
  }

  public sayGoodEvening():void{
    this.message = "Good Evening";
  }
}
