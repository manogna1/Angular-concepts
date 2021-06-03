import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {
  appName="Employee Management App";
  companyName="Hexaware USA"
  course : string="Angular";
  myAge = 40;
  receivedDataFromChild='';
  isLoggedIn = false;
  skillList: string[] = [
    'html', 'css', 'js', 'ng'
    ];
  constructor() { }

  ngOnInit(): void {
  }
  handleClickMe(event): void{
console.log(event);
alert("clicked");
event.toElement.innerHTML="clicked";
event.toElement.disabled=true;
  }
  handleReceiveData(event): void{
    console.log(event);
this.receivedDataFromChild=event;
      }
}
