import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  number:number=0;
  movie=['Bahubali2','audhrs','Jailavakusa'];
  theater=['jagadamba','kinnera','Melody'];
  select:object[]=[];
  ticket={};
  mov(i){
    this.ticket["movie"]=this.movie[i];
  }
  tick(i){
    this.ticket["theater"]=this.theater[i];
  }
  book(){
    this.ticket['nooftickets']=this.number;
    this.select.push(this.ticket);
    this.ticket={};
    if(this.number!=0){
      alert("movie tickets are booked");
    }
  }
}
