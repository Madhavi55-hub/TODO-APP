import { Component} from '@angular/core';
import { MessageService } from './message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers:[MessageService]
})
export class AppComponent{
  title = 'website';
 msg:string="";
 othersms:string="";

  // constructor(private _messageservice:MessageService){

  // }
  ngOnInit(){
    //calling the output here 
//  this.msg=this. _messageservice.getmessage();
  }
  // getmessage(){
  //   this.msg=this. _messageservice.getmessage();
    // this.othersms=this._messageservice.getmessagefromothermessageservice();
  // }

//for button
// getmessage(){
//   this.msg=this. _messageservice.getmessage();
// }
constructor(){
  localStorage.setItem("isloggedin","false");
}


}

