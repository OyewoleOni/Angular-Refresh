import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public tourImage:string = "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=600";

  public time:string = new Date().toLocaleTimeString();
  constructor() { 
    this.updateTine();
  }

  ngOnInit(): void {
    
  }
  public getDate():string{
    return new Date().toDateString();
  }

  public getDateTime(): string{
    return new Date().toLocaleTimeString();
  }

  public updateTine():void{
    setInterval(()=> {
      this.time = new Date().toLocaleTimeString();
    }, 1000)
  }
 
}
